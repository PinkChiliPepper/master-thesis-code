
function convertRomanToInteger(str) {
    // Split the string to get each set of roman numerals for example XII
    var arrayOfNumerals= str.split(' ');
    console.log(arrayOfNumerals);
    var newString = ""
    // Go over each set of roman numberals and calculate the total number per each numberal
    for(let i; i == arrayOfNumerals.length; i++) {
        var romanNumber = arrayOfNumerals[i]
        // Handle the exceptions first
        if (romanNumber == "IIX") {
            newString += " 8 ";
        } 

        // Go over each character in the roman numeral to calcualte the number
        var totalCurrentNumber = 0;
        romanNumber.forEach(char => {
            switch (char) {
                case 'I':
                    totalCurrentNumber += 1
                    break;
                case 'V':
                    totalCurrentNumber += 5
                    break;
                case 'X':
                    totalCurrentNumber += 10

                    break;
                case 'L':
                    totalCurrentNumber += 50
                    break;
                case 'C':
                    totalCurrentNumber += 100
                    break;
                case 'D': 
                    totalCurrentNumber += 500
                    break;
                case 'M': 
                    totalCurrentNumber += 1000
                    break;
            } 

        });
        
         newString += " " + totalCurrentNumber + "";
    }

    return newString;
}


function main() {
    var convertedString = convertRomanToInteger("XIII");
    console.log('Answer task A: '+ convertedString)
}

main()