//Create a function that takes a string as input and checks if it begins with ( and ends with ) or begins with an [ and ends with an ] or begins with a < and ends with an /> and returns true or false
function checkParantheses(str) {
    if (str.charAt(0) == '(' && str.charAt(str.length - 1) == ')') {
        console.log("True");
    } else if (str.charAt(0) == '[' && str.charAt(str.length - 1) == ']') {
        console.log("True");
    } else if (str.charAt(0) == '<' && str.charAt(str.length - 2) == '/' && str.charAt(str.length - 1) == '>') {
        console.log("True");
    } else {
        console.log("False");
    }
}

//Create a function that takes a string as input and checks if it begins with ( and ends with ) or begins with an [ and ends with an ] or begins with a < and ends with an /> and then check that the open bracket is always closed by a closing bracket of the same type and returns true or false
function checkParantheses2(str) {
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
    console.log(result);
}

function main() {
    checkParantheses('<1/>');
    //console.log(checkParantheses3('<1/>'));
    console.log('Answer task B:')
}

main()