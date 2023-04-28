function main() {
    console.log('Answer task A:')
    console.log(romanToArabic("MCDXLIIX"));

    //This code does not check the correctness of the roman input e.g.
    //MCDXXLIIX is not a valid roman number but it will return 1458
    console.log('Incorrect:');
    console.log(romanToArabic("MCDXXLIIX"));

    //We can check the validity of the roman input (in dialect) by using checkRomanDialectString
    console.log(checkRomanDialectString("MCDXXLIIX"));
}

function romanToArabic(roman) {
    var result = 0;
    var romanArray = roman.split('');
    var romanMap = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };

    for (var i = 0; i < romanArray.length; i++) {
        var current = romanMap[romanArray[i]];
        var next = romanMap[romanArray[i + 1]];
        var next2 = romanMap[romanArray[i + 2]];

        if (next2 && next && current == 1 && next == 1 && next2 == 10){
            result += 8;
            i+=2;
        } else if (next && current < next) {
            result += next - current;
            i++;
        } else {
            result += current;
        }
    }

    return result;
}

function checkRomanDialectString(roman){
    var regex = new RegExp(/^(M{0,3})(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|IIV|V?I{0,3})$/);
    return regex.test(roman);
}

main()