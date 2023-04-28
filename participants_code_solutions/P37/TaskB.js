function main(input) {
    console.log('Answer task B:')

    const openingBrackets = ['(', '[', '{'];
    const closingBrackets = [')', ']', '}'];

    const stack = [];

    for (let i = 0; i < input.length; i++) {
        const current = input[i];

        if (openingBrackets.includes(current)) {
            stack.push(current);
        } else if (closingBrackets.includes(current)) {
            const last = stack.pop();

            if (openingBrackets.indexOf(last) !== closingBrackets.indexOf(current)) {
                return false;
            }
        }
    }

  console.log(stack.length === 0)
          

}

main('(hellow[]o{r  {()}ld)')