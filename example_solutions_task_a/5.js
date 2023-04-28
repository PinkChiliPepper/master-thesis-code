function main() {
    console.log(romanToInt('IIX')) // 8
    console.log(romanToInt('XLIIX')) // 48
    console.log(romanToInt('XCIV')) // 94
    console.log(romanToInt('MCMXCIIX')) // 1998
}
main()

// 5. Subtract in hindsight.
// Answer by P22.
// Small changes to make it correct:
//  * The check for eight is -2 instead of -4, as the 8 hits the I + X in the
//    iteration after that. Otherwise, 6 is subtracted.
function romanToInt(roman){
    let sum = 0 ;
    for (let i=0; i<roman.length;i++){
        if (roman[i] == 'I'){
            sum += 1;
        }
        if (roman[i] == 'V'){
            sum += 5;
        }
        if (roman[i] == 'X'){
            sum += 10;
        }
        if (roman[i] == 'L'){
            sum += 50;
        }
        if (roman[i] == 'C'){
            sum += 100;
        }
        if (roman[i] == 'D'){
            sum += 500;
        }
        if (roman[i] == 'M'){
            sum += 1000;
        }

        // Check for subtraction
        try{
            if (roman[i] == 'I' && roman[i+1] == 'V'){
                sum -= 2;
            }
            if (roman[i] == 'I' && roman[i+1] == 'X'){
                sum -= 2;
            }
            if (roman[i] == 'X' && roman[i+1] == 'L'){
                sum -= 20;
            }
            if (roman[i] == 'X' && roman[i+1] == 'C'){
                sum -= 20;
            }
            if (roman[i] == 'C' && roman[i+1] == 'D'){
                sum -= 200;
            }
            if (roman[i] == 'C' && roman[i+1] == 'M'){
                sum -= 200;
            }
            //Special case of 8
            if (roman[i] == 'I' && roman[i+1]== 'I' && roman[i+2] =='X'){
                sum -= 2;
            }
        }catch(err){
            // Do nothing
        }
    }
    return sum;
}
