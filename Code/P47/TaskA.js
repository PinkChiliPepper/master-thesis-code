function main() {
    var roman = "XLIIX";
    var romanMap = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000
    };
    var romanArray = roman.split("");
    var romanArrayLength = romanArray.length;
    var result = 0;

    for (var i = 0; i < romanArrayLength; i++) {
        var currentNumber = romanMap[romanArray[i]];
        var nextNumber = romanMap[romanArray[i + 1]];
        var nextNextNumber = romanMap[romanArray[i + 2]];
        if (currentNumber == nextNumber && currentNumber < nextNextNumber) {
            result += nextNextNumber - (currentNumber * 2);
            i += 2;
        } else if (currentNumber < nextNumber) {
            result += nextNumber - currentNumber;
            i++;
        } else {
            result += currentNumber;
        }
    }
    console.log(result);
}

main()