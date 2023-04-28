const openingBeforeClosing = (chars) => {
    const opening = (char) => char === '(' || char === '['
    const closing = (char) => char === ')' || char === ']'
    return chars.findIndex(opening) < chars.findIndex(closing)
}

function main(str) {
    
    const chars = str.split("")
    
    // Group braket by type creating an array of arrays by type

    return openingBeforeClosing(chars)
}

console.log(main("()"))
console.log(main("(("))
console.log(main(")("))
console.log(main("]()["))
console.log(main("[()]"))
