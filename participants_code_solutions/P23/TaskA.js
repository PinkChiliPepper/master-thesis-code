function main() {
    console.log('Answer task A:');

    const roman = "IIX";
    let previous = 0;
    let current = 0;
    let sum = 0;

    for(let i = roman.length - 1; i >= 0; i--) {
        current = romanToInteger(roman[i]);
        //console.log(current)
        if(current >= previous) {
            sum += current;
            console.log("plus" + current)

        } else {
            sum -= current;
            console.log("minus" + current)
        }

        previous = current;

    }

    console.log(sum)
}

function romanToInteger(letter) {
    switch(letter) {/*
        case "IV":
            return 4;
        case "IX":
            return 9;
        case "XL":
            return 40;
        case "XC":
            return 90;
        case "CD":
            return 400;
        case "CM":
            return 900;*/
        case "I":
            return 1;
        case "V":
            return 5;
        case "X":
            return 10;
        case "L":
            return 50;
        case "C":
            return 100;
        case "D":
            return 500;
        case "M":
            return 1000;
    }
}

main()