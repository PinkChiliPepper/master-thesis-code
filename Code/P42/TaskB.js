const parantheses = { ")": "(", "}": "{", "]": "[" }
const validOpenCharacters = Object.values(parantheses)
const validCloseCharacters = Object.keys(parantheses)

function main(string) {
    console.log('Answer task B:' + checkString(string))
}

function checkString(string) {
    const toBeClosed = []
    let valid = true

    string.split("").forEach(character => {
        if (validCloseCharacters.includes(character)) {
            if (toBeClosed.pop() !== parantheses[character]) {
                valid = false
            }
        } else if (validOpenCharacters.includes(character)) {
            toBeClosed.push(character)
        } else {
            // String isn't valid if it contains a non-parantheses character
            valid = false
        }
    })

    return valid
}

main("()")
main("[]")
main("{}")
main("[{()}]")
main("([)]")
main("()[]{}")
main("()[]{})")
main("()[1]{}")
main("()[[]{}")
