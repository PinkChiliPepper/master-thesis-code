function main() {
    console.log(checkParentheses(')')) // false
    console.log(checkParentheses(')(')) // false
    console.log(checkParentheses('())')) // false
    console.log(checkParentheses('([)]')) // false
    console.log(checkParentheses('<[/>]')) // false

    console.log(checkParentheses('()[]</>()')) // true
    console.log(checkParentheses('([]</>)')) // true
    console.log(checkParentheses('((((</>))))')) // true
}
main()

// 3. Recursion.
// No participant coded this and finished a correct solution.
function checkParentheses(str, lastOpen=null){
    // replace /> with > to make recursion easier
    let newStr = str.replace(/\/>/g, ">");

    let result = checkParentheses2(newStr, lastOpen)
    if (typeof result == "string") return false
    return result
}
function checkParentheses2(str, lastOpen) {
    const opening = ['(', '[', '<']
    const closing = [')', ']', '>']
    // Empty string
    if (str.length == 0 && lastOpen == null) return true

    // Something opened but never closed
    if (str.length == 0 && lastOpen != null) return false

    // If the first is an opening brace, enter recursion
    if (opening.includes(str[0])) {
        subresult = checkParentheses2(str.slice(1), str[0])

        // if the result of the recursion is a boolean, return that boolean
        if (typeof subresult == "boolean") return subresult

        // if the result of the recursion is a substring, continue with that substring
        if (typeof subresult == "string") str = subresult
    }

    // Else, if the first is a closing brace, check if it matches the last opening brace
    if (str.length > 0 && closing.includes(str[0])) {

        // Exit this layer of recursion if there is no matching open
        // (bc there might be a higher layer that still has an open)
        if (lastOpen == null) return str

        // If it matches, exit this layer of recursion.
        if (opening.indexOf(lastOpen) == closing.indexOf(str[0])) {
            if (str.length == 1) return true

            newString = str.slice(1)
            if (opening.includes(newString[0])) {
                return checkParentheses2(newString, null)
            }
            else return newString

        }
        // if it does not match, return false
        else {
            return false
        }
    }

    return undefined
}