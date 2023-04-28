function main(numeral) {
    // Gather numbers and corresponding letters
    const numbers = [900, 1000, 400, 500, 100, 90, 50, 40, 10, 9, 8, 5, 4, 1]
    const letters = ['CM', 'M', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'IIX', 'V', 'IV', 'I']
    // Define empty sum
    let sum = 0
    // Loop over largest letter to smallest letter (but put special cases first) and sum
    // Delete part of string that has been used
    let i = 0;

    while (i < letters.length) {
        console.log(letters[i]);
        i++;
    }
    // Make sure to take into account the seven cases
    console.log('Answer task A:')
}

main()