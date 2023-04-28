function main() {
    console.log('Answer task B:')
    validateBrackets('test')
}

main()

function validateBrackets(x){
    let valid = true;
    let expectbracket = false;
    for (let i = 0; i < x.length; i++) {
        let char = x[i];
        if ((char == '(') || (char == '[') || (char == '<') && expectbracket) {
            valid = false
            break
      }
        if ((char == '(') || (char == '[') || (char == '<')) {
            expectbracket = true;
            continue
      }
        if ((char == ')') || (char == ']') || (char == '/>') && expectbracket) {
            expectbracket = false;
            continue
      }
    }
    console.log(valid);
    return valid;
}