    function main() {
        console.log(romanToInt('IIX')) // 8
        console.log(romanToInt('XLIIX')) // 48
        console.log(romanToInt('XCIV')) // 94
        console.log(romanToInt('MCMXCIIX')) // 1998
    }
    main()

    // 7. Regex.
    // No participant coded this, this solution was only mentioned
    // during the brainstorming task.
    function romanToInt(str) {
        const romanNumerals = {
            "I": 1,
            "IV": 4,
            "V": 5,
            "IIX": 8,
            "IX": 9,
            "X": 10,
            "XL": 40,
            "L": 50,
            "XC": 90,
            "C": 100,
            "CD": 400,
            "D": 500,
            "CM": 900,
            "M": 1000
        };

        let total = 0;

        // Add up all the cases.
        str = str.replace(/IIX|CM|CD|XC|XL|XI|IV|M|D|C|L|X|V|I/g, match => total += romanNumerals[match]);

        return total;
    }
