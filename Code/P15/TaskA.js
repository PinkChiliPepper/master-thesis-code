const mapNumbers = new Map();   
mapNumbers.set('I', 1);
mapNumbers.set('IV', 4); 
mapNumbers.set('V', 5);
mapNumbers.set('VIII', 8); 
mapNumbers.set('IX', 9); 
mapNumbers.set('X', 10); 
mapNumbers.set('XL', 40); 
mapNumbers.set('L', 50); 
mapNumbers.set('XC', 90); 
mapNumbers.set('C', 100); 
mapNumbers.set('CD', 400); 
mapNumbers.set('D', 500);
mapNumbers.set('CM', 900); 
mapNumbers.set('M', 1000); 

function romanToInt(romanString) {
    let result = 0;

    for (let i = 0; i < romanString.length; i++) {
        if (mapNumbers.get(romanString[i]) < mapNumbers.get(romanString[i+1])) {
            result += mapNumbers.get(romanString[i] + romanString[i+1]);
        }
        else {
            result += mapNumbers.get(romanString[i]);
        }
    }
    return result;
}

function main() {
    console.log('Answer task A:')
    console.log(romanToInt('III'));
    console.log(romanToInt('IV'));
    console.log(romanToInt('CM'));
    console.log(romanToInt('MMXXII'));
    console.log(romanToInt('VIII'));
}

main()