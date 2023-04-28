// function that takes a string as input and determines whether every starting bracket has a closing bracket
// the closing bracket has to come after the starting bracket
// the brackets pairs are: "(" and ")", "[" and "]", "<" and "/>"
// the function returns true if the string is valid and false if it is not

function isValid(str) {
    var stack = [];
    for (var i = 0; i < str.length; i++) {
        if (str[i] == '(' || str[i] == '[' || str[i] == '<') {
            stack.push(str[i]);
        } else if (str[i] == ')' || str[i] == ']' || str[i] == '/') {
            if (stack.length == 0) return false;
            var last = stack[stack.length - 1];
            if (str[i] == ')' && last == '(') {
                stack.pop();
            } else if (str[i] == ']' && last == '[') {
                stack.pop();
            } else if (str[i] == '/' && last == '<') {
                stack.pop();
            } else {
                return false;
            }
        }
    }
    if (stack.length > 0) return false;
    return true;
}

function main() {
    console.log('Answer task B:')
    console.log(isValid('()'));
    console.log(isValid('([])'));
    console.log(isValid('([)]'));
    console.log(isValid('([<]>)'));
    console.log(isValid('</>'));
}

main()