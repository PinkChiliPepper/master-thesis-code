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

// 6. Middle outward
// No participant coded this, this solution was only mentioned
// during the brainstorming task.
function checkParentheses(input) {
    while (input.includes("()") || input.includes("[]") || input.includes("</>")) {
        input = input.replace("()", "");
        input = input.replace("[]", "");
        input = input.replace("</>", "");
    }
    return input.length == 0
}