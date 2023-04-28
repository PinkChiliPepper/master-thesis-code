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

// 2. Regex.
// Answer by P7.
function checkParentheses(input) {

    //get regex of string in brackets
    const regex = /\[()\]/g

    // get regex of string in parentheses
    const regex2 = /\(()\)/g

    // get regex of string in html brackets
    const regex3 = /<\/>/g

    // get string without the regex
    const removeRegex = (str) => {
        return str.replace(regex, '').replace(regex2, '').replace(regex3, '')
    }

    // check if string is valid according to all regex strings
    const isValid = (str) => {
        return str.length === 0 || (regex.test(str) || regex2.test(str) || regex3.test(str)) && isValid(removeRegex(str))
    }

    return isValid(input)
}