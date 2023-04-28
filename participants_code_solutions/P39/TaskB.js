function validateParens(str) {
    const opened = []
    for (const char of str.split('')) {
        switch (char) {
            case '(':
            case '[':
            case '<':
                opened.push(char)
                break
            case ')':
                if (opened.pop() != '(') return false
                break
            case ']':
                if (opened.pop() != '[') return false
                break
            case '>':
                if (opened.pop() != '<') return false
                break
        }
    }
    return true // Valid
}


function main() {
    console.log(validateParens('</>'))
    console.log(validateParens('(</>)'))
    console.log(validateParens('(</>)))'))
    console.log(validateParens('(</>>)'))
    console.log(validateParens('(</[])'))
    console.log(validateParens(')('))
    console.log(validateParens('([)]'))
}

main()