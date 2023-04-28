// Check if string closes with the same type of brackets as it opens with

function checkBrackets(str) {
    let brackets = {
        '(': ')',
        '[': ']',
        '<': '/>'
    }
    const str_array = str.split('')
    str_array.forEach((char, index) => {
        console.log(char)
        if (char in brackets && brackets[char] === str[-1]) {
            str_array.delete_at(index)
            str_array.pop(1)
        console.log(str_array) }
        else if (char in brackets && brackets[char] === str[-1..-2]) {
                str_array.delete_at(index)
                str_array.pop(1)
                console.log(str_array)
        } else if (char in brackets && brackets[char] !== str[-1]) {
            console.log('false')
        } else {
            console.log('not char')
        }
    })
}

function main() {
    console.log('Answer task B:')
    console.log(checkBrackets('([<hello/>])'))
}

main()