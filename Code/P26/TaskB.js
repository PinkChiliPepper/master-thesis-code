function main() {
    console.log('Answer task B:' + checkIfInputIsParentheses("hello"))
}

main()

// function that checks wether the input is a pair of parentheses
function checkIfInputIsParentheses(string) {
    if (!string.indexOf("(" || ")" || "[" || "]" || "{" || "}")) {
        return "This is not a correct string!"
    }

    for (let i = 0; i < string.length; i++) {
        var first = string[i];
      }
}
