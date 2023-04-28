// Create a function that validates whether a bracket is closed correctly. 
// A bracket can include () <> and [].
function validateBrackets(str) {
    var stack = []
    var openBrackets = ['(', '<', '[']
    var closeBrackets = [')', '>', ']']

    for (var i = 0; i < str.length; i++) {
        var currentBracket = str[i]
        var currentBracketIndex = openBrackets.indexOf(currentBracket)

        if (currentBracketIndex !== -1) {
            stack.push(currentBracketIndex)
        } else if (closeBrackets.indexOf(currentBracket) !== -1) {
            if (stack.length === 0) {
                return false
            }

            var lastBracketIndex = stack.pop()

            if (closeBrackets.indexOf(currentBracket) !== lastBracketIndex) {
                return false
            }
        }
    }

    return stack.length === 0
}

function main() {
    var valid = validateBrackets("valid: <(a+b)>") // true
    var invalid = validateBrackets("invalid syntax: <(a+b)<") // false

    console.log('Valid Answer task B:  ' + valid)
    console.log('Invalid Answer task B: ' + invalid)
}

main()