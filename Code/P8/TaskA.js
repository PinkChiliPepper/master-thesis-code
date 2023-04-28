
function converter(input) {

    var doubles = [
        ['IV', 4],
        ['IX', 9],
        ['XL', 40],
        ['XC', 90],
        ['CD', 400],
        ['CM', 900],
    ]
    var singles = [ // should be an object
        ['I', 1],
        ['V', 5],
        ['X', 10],
        ['L', 50],
        ['C', 100],
        ['D', 500],
        ['M', 1000],
    ]

    var result = 0

    // Collect and add all double roman symbols
    for (var i=0; i++; i< doubles.length -1) {
        if (doubles[i][0] === input.subString(i, i+1)) {
            result += doubles[i][1]
        }
    }
    // Remove all double roman symbols
    for (var i=0; i++; i< doubles.length -1) {
        input = input.replace(doubles[i][0], '')
    }

    // Go over input string and collect and summ all values based on the singles data 
    for (var i; i++; i<input.length) {
        input[i]
        result += 
    }


    return result
}




function main() {
    input = 'III'
    converter(input)

}

main()