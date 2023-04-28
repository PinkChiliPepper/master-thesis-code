const a = "()"
const b = "[]"
const c = "</>"

function main(input) {
    console.log('Answer task B:')

    const parenthesis = {
        "curve": ["(", ")"],
        "square": ["[", "]"],
        "sharp": ["<", "/>"]
    }   

    input = input.split("")

    if (input.includes(parenthesis["curve"][0])) {
        if (input.includes(parenthesis["curve"][1])) {
            return console.log(true)} else return false
    } else if (input.includes(parenthesis["square"][0])) {
        if (input.includes(parenthesis["square"][1])) {
            return console.log(true)} else return false
    } else if (input.includes(parenthesis["sharp"][0])) {
        if (input.includes(parenthesis["square"][1])) {
            return console.log(true)} else return false}
        }

main("()")