function main() {
    console.log(checkParentheses('(')) // false
    console.log(checkParentheses(')(')) // false
    console.log(checkParentheses('())')) // false
    console.log(checkParentheses('([)]')) // false
    console.log(checkParentheses('<[/>]')) // false

    console.log(checkParentheses('()[]</>()')) // true
    console.log(checkParentheses('([]</>)')) // true
    console.log(checkParentheses('((((</>))))')) // true
}
main()

// 1. Stack.
// Answer by P2.
// Small changes to make it correct:
//  * Check if the stack is empty before returning.
function checkParentheses(str) {
    let stack = [];
    let result = true;

    for (let i = 0; i < str.length; i++) {
        if (str[i] == '(' || str[i] == '[' || str[i] == '<') {
            stack.push(str[i]);
        } else if (str[i] == ')') {
            if (stack[stack.length - 1] == '(') {
                stack.pop();
            } else {
                result = false;
            }
        } else if (str[i] == ']') {
            if (stack[stack.length - 1] == '[') {
                stack.pop();
            } else {
                result = false;
            }
        } else if (str[i] == '>') {
            if (stack[stack.length - 1] == '<') {
                stack.pop();
            } else {
                result = false;
            }
        }
    }
    if (stack.length > 0) {
        result = false;
    }

    return result
}