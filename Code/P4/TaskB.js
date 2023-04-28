// bracketValidator for </> and () and [] brackets
const bracketValidator = (string) => {
    const brackets = {
        '(': ')',
        '[': ']',
        '<': "/>" ,
    }
    const stack = [];
    for (let i = 0; i < string.length; i++) {
        // console.log(brackets[string[i]],brackets[stack[stack.length - 1]]);
        if (string[i-1]) console.log(string[i-1] + string[i]);

        if (brackets[string[i]]) {
            stack.push(brackets[string[i]]);
            console.log(stack);
        } // account for /> case
        else if (string[i] === '>' && string[i-1] ) {
            console.log(string[i-1] + string[i], stack[stack.length-1]);
            // stack.pop();
        }
        else if (string[i] ===  stack[stack.length-1]) {
    
            stack.pop();
        }
          else {
            return false;
        }
    }
    return stack.length === 0;
}



function main() {
    console.log('Answer task B:')
    console.log(bracketValidator('()')) // true
    console.log(bracketValidator('</>')) // true
    // console.log(bracketValidator('(</>)')) // true
    // console.log(bracketValidator(')(')) // false
    // console.log(bracketValidator('([)]')) // false
    // console.log(bracketValidator('()')) // true

}

main()