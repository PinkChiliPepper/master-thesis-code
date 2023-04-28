// Will validate whether every occurance of the n-th character in "openBrackets" is matched by the n-th character in "closeBrackets" in the string "str"
// characters can be e.g. "()", "[]", "<>", "{}", etc.
function validateOpenAndClosingBrackets(str, openBrackets, closeBrackets) {
    let stack = []

    for (let i = 0; i < str.length; i++) {
        let c = str[i]

        if (openBrackets.includes(c)) {
            stack.push(c)
        }

        if (closeBrackets.includes(c) &&
            openBrackets.indexOf(stack.pop()) != closeBrackets.indexOf(c)) {
            return false
        }
    }

    return stack.length == 0
}

function main() {
    console.log('Answer task B:')
    // Write me some test cases for validateOpenAndClosingBrackets()
    console.log(validateOpenAndClosingBrackets("()", "(", ")"))
    console.log(validateOpenAndClosingBrackets("[]", "[", "]"))
    console.log(validateOpenAndClosingBrackets("<>", "<", ">"))
    console.log(validateOpenAndClosingBrackets("{}", "{", "}"))
    console.log(validateOpenAndClosingBrackets("()[]<>{}", "([{<", ")]}>"))
    console.log(validateOpenAndClosingBrackets("([)]", "([{", ")]}>"))
    console.log(validateOpenAndClosingBrackets("([)]", "([{", ")]}>"))
    console.log(validateOpenAndClosingBrackets("((()))", "([{", ")]}>"))
    console.log(validateOpenAndClosingBrackets("((())", "([{", ")]}>"))
}

main()