const matches = [{
    begin: "(",
    end: ")"
}, {
    begin: "[",
    end: "]"
}, {
    begin: "<",
    end: "/>"
}]

function main(str) {
    console.log('Answer task B:')
    var parentheses = []

    const characters = str.split("")
    for (var i = 0; i < characters.length; i++){
        const char = characters[i]
        if (char == "(" || char == "[" || char == "<"){
            parentheses.push(char)
        }

        const lastCharacter = parentheses[parentheses.length - 1]
        if (char == ")" && lastCharacter != "(") return false
        if (char == "]" && lastCharacter != "]") return false
    }
}

main("(a)")