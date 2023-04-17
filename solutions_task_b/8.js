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

// 8. Track nesting
// No participant coded this, this solution was only mentioned
// during the brainstorming task.
function checkParentheses(input) {
    depth = 0
    currentNesting = 0
    round = {open: [[]], close: [[]]}
    square = {open: [[]], close: [[]]}
    html = {open: [[]], close: [[]]}

    // replace /> with > to make checks easier
    input = input.replace(/\/>/g, ">");

    for (let i = 0; i < input.length; i++) {
        typeOfBracket = round
        isOpen = true

        if (input[i] == "(") {typeOfBracket = round; isOpen = true}
        else if (input[i] == ")") {typeOfBracket = round; isOpen = false}

        else if (input[i] == "[") {typeOfBracket = square; isOpen = true}
        else if (input[i] == "]") {typeOfBracket = square; isOpen = false}

        else if (input[i] == "<") {typeOfBracket = html; isOpen = true}
        else if (input[i] == ">") {typeOfBracket = html; isOpen = false}
        else return false // unknown character in input

        wasSuccessful = addNesting(typeOfBracket, isOpen)
        if (!wasSuccessful) return false
    }

    // All closes should be the inverse of the opens for each nesting
    let roundIsCorrect = areArraysEqual(round.open, round.close.map(list => list.reverse()))
    let squareIsCorrect = areArraysEqual(square.open, square.close.map(list => list.reverse()))
    let htmlIsCorrect = areArraysEqual(html.open, html.close.map(list => list.reverse()))
    return roundIsCorrect && squareIsCorrect && htmlIsCorrect

    function addNesting(objectToAddTo, isOpen) {
        // Opening bracket
        if(isOpen) {
            // If the depth is back to 0, there are multiple loose nestings, such as ()()()
            if (depth === 0) {
                currentNesting += 1
            }

            open = objectToAddTo.open
            if (!open.hasOwnProperty(currentNesting)) {
                open[currentNesting] = []
            }

            open[currentNesting].push(depth)
            depth += 1
        }

        // Closing bracket
        else {
            depth -= 1
            if ( depth < 0) return false // more closes than opens

            close = objectToAddTo.close
            if (!close.hasOwnProperty(currentNesting)) {
                close[currentNesting] = []
            }
            close[currentNesting].push(depth)
        }
        return true
    }

    // To check if two arrays of arrays are the same.
    function areArraysEqual(arr1, arr2) {
        if (arr1.length !== arr2.length) {
          return false;
        }

        for (let i = 0; i < arr1.length; i++) {
          if (Array.isArray(arr1[i]) && Array.isArray(arr2[i])) {
            if (!areArraysEqual(arr1[i], arr2[i])) {
              return false;
            }
          } else if (arr1[i] !== arr2[i]) {
                return false;
          }
        }

        return true;
    }

}