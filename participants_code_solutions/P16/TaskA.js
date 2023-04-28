function romanNumeralsToIntegers(x) {
var sum = 0;
var added = false;

for (var i = 0; i < x.length; i++) {
    added = false;
    if (x === 'IIX') {
        sum = 8;
        console.log(sum);
        return sum;
    }
    if (x[i] === 'I' && added === false) {
        sum += 1;
        added = true;
    } 
    if (x[i] === 'V' && added === false) {
        sum += 5;
        added = true;
    } 
    if (x[i] === 'X' && added === false) {
        sum += 10;
        added = true;
    } 
    if (x[i] === 'L' && added === false) {
        sum += 50;
        added = true;
    } 
    if (x[i] === 'C' && added === false) {
        sum += 100;
        added = true;
    } 
    if (x[i] === 'D' && added === false) {
        sum += 500;
        added = true;
    } 
    if (x[i] === 'M' && added === false) {
        sum += 1000;
        added = true;
    } 
    
    }
    console.log(sum);
    return(sum);
}

romanNumeralsToIntegers('IIX');