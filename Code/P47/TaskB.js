function main(string) {
    var openingCharacters = ["(", "[", "<"];
    var endingCharacters = [")", "]", "/"];
    var charactersOpened = [];
    for (var i = 0; i < string.length; i++) {
        var character = string[i];

        if (character == "/" && string[i+1] != ">") {
            continue;
        }
        if (charactersOpened.length == 0 && endingCharacters.includes(character)) {
            // ending character while no opening character was found for it.
            return false;
        } else if (endingCharacters.indexOf(character) != -1 && openingCharacters.indexOf(charactersOpened[charactersOpened.length]) != endingCharacters.indexOf(character)) {
            return false;
        } else if (openingCharacters.includes(character)) {
            // start new section
            charactersOpened.push(character);
        } else if (endingCharacters.indexOf(character) != -1) {
            // end section
            charactersOpened.pop();
        }
    }

    return true;
}

// // should return true
// console.log(main("test"))

// // should return true
// console.log(main("</>"))

// should return true
console.log(main("(</>)"))

// // should return false
// console.log(main(")("))

// // should return false
// console.log(main("([)]"))