function main() {
    console.log('Answer task A:')
    // Write a function that converts roman numerals to integers.
    // There is no need to check for invalid roman numerals.
    // I = 1
    // V = 5
    // X = 10
    // L = 50
    // C = 100
    // D = 500
    // M = 1000
    // Example: Input: "XL" Output: 40
    // Example: Input: "III" Output: 3

    let romanNumeral = prompt();

    function romanToInt(s) {
        let romanNumerals = {
            I: 1,
            V: 5,
            X: 10,
            L: 50,
            C: 100,
            D: 500,
            M: 1000
        };

        let result = 0;
        for (let i = 0; i < s.length; i++) {
            let current = romanNumerals[s[i]];
            let next = romanNumerals[s[i + 1]];
            if (current < next) {
                result -= current;
            } else {
                result += current;
            }
        }
        return result;
    }

    console.log(romanToInt(romanNumeral));
}

main()