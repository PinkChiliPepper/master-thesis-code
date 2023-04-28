function main() {
    console.log('Answer task B:')

    //get input from user
    const input = '([</>][])'

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

    console.log(isValid(input))
}

main()