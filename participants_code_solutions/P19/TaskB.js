function main() {
    console.log('Answer task B:')


    const teststr = '(<download kaasje/>[helaamaal kaasje])';
    const teststr2 = '([download kaasje][helaamaal kaasje])</>';
    const teststr3 = '<(/>[])';
    const teststr4 = '[<]/>()';

    console.log(validParentheses(teststr4));
}

// function validParentheses(parens) {
//     let count = 0;
//     for (let i = 0; i < parens.length; i++) {
//         if (parens[i] == '(') {
//             count++;
//         }
//         else if (parens[i] == ')') {
//             count--;
//         }
//         if (count < 0) {
//             return false;
//         }
//     }
//     return count == 0;
// }

function validParentheses(input){
    const open1 = '(';
    const open2 = '[';
    const open3 = '<';
    const close1 = ')';
    const close2 = ']';
    const close3 = '/>';

    const parenthesesEncountered = [];

    for (let i =0; i < input.length; i++){
        if(input[i] == open1 || input[i] == open2 || input[i] == open3){
            parenthesesEncountered.push(input[i]);
        }
        else if(input[i] == close1 || input[i] == close2 || input[i] == close3[0]){
            if(parenthesesEncountered.length == 0){
                return false;
            }
            else{
                const lastOpen = parenthesesEncountered.pop();
                if(lastOpen == open1 && input[i] != close1){
                    return false;
                }
                else if(lastOpen == open2 && input[i] != close2){
                    return false;
                }
                else if(lastOpen == open3 && input[i] + input[i+1] != close3){
                    return false;
                }
            }
        }
    }

    return true;
}

main()