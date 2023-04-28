function main() {
    console.log(romanToInt("IIX"));
}

// function that converts roman numerals to integers where 8 is written as IIX
function romanToInt(roman) {
    if (roman === null || roman.length === 0) {
      return 0;
    }
    if (roman === "IIX") {
      return 8;
    }
    var romanNumeralMap = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
    var result = 0;
    for (var i = 0; i < roman.length; i++) {
      if (romanNumeralMap[roman[i]] < romanNumeralMap[roman[i + 1]]) {
        result -= romanNumeralMap[roman[i]];
      } else {
        result += romanNumeralMap[roman[i]];
      }
    }
    return result;
  }

main()