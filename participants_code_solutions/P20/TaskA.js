// convert roman numerals to integers
// The value of 8 should be represented as 'IIX' instead of 'VIII'
function convertRomanToInt(romanNumeral){
    var romanNumeral = romanNumeral.toUpperCase();
    var romanNumeralArray = romanNumeral.split('');
    var total = 0;
    var romanNumeralKey = {M:1000,CM:900,D:500,CD:400,C:100,XC:90,L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1};
    for(var i = 0;i<romanNumeralArray.length;i++){
        console.log("----")
        console.log(romanNumeralKey[romanNumeralArray[i]], romanNumeralKey[romanNumeralArray[i + 1]]);
        if(romanNumeralKey[romanNumeralArray[i]] < romanNumeralKey[romanNumeralArray[i+1]]){
            total += romanNumeralKey[romanNumeralArray[i+1]] - romanNumeralKey[romanNumeralArray[i]];
            i++;
        } else {
            total += romanNumeralKey[romanNumeralArray[i]];
        }
    }
    return total;
}

console.log(convertRomanToInt('IIX'))