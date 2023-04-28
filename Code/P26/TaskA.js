function main() {
    console.log('Answer task A:' +
    " 1 = " + romanize(1) + 
    " 5 = " + romanize(5) + 
    " 10 = " + romanize(10) + 
    " 50 = " + romanize(50) +
    " 100 = " + romanize(100) + 
    " 500 = " + romanize(500) + 
    " 1000 = " + romanize(1000) 
    )
}

main()

// translate numbers to roman numerals
function romanize(num) {
    var lookup = {M:1000,CM:900,D:500,CD:400,C:100,XC:90,L:50,XL:40,X:10,IX:9,IIX:8,V:5,IV:4,I:1},roman = '',i;
    for ( i in lookup ) {
        while ( num >= lookup[i] ) {
            roman += i;
            num -= lookup[i];
        }
    }
    return roman;
}

// use the previous romanize function to print the numbers 1, 5, 10, 50, 100, 500, 1000
// function main() {
//     console.log('Answer task B:' + 
//     " 1 = " + romanize(1) + 
//     " 5 = " + romanize(5) + 
//     " 10 = " + romanize(10) + 
//     " 50 = " + romanize(50) +
//     " 100 = " + romanize(100) + 
//     " 500 = " + romanize(500) + 
//     " 1000 = " + romanize(1000) 
//     )
// }