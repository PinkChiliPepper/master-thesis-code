function validateBrackets(string) {
    const brackets = {
        "(": ")",
        "[": "]",
        "<": "/",
        "/": 
    }

    let closingBrackets = []

    for (let i=0;i<string.length;i++) {
        let char = string[i]
        if (!brackets[char] || Object.values(brackets).includes(char)) {
            return false
        }

        closingBrackets.unshift(brackets[char])
    } 
    return string
}

function main() {
    const validStrings = ["[]", "<>", "()", "[</>]", "((<[]/>))", "[([])]"]
    const invalidStrings = ["[", "]", "[<]", "([())", "([([)])]", "<>", "[<[>]/", "[(])"]
    // Testing first
    validStrings.forEach((string) => {
        console.log(validateBrackets(string) === true)
    })
    invalidStrings.forEach((string) => {
        console.log(validateBrackets(string) === false)
    })
}

main()