function main(parentheses) {
    // check parentheses
    let stack = [];
    let open = ['(', '[', '{', '<'];
    let close = [')', ']', '}', '/', '>'];
    let openIndex = 0;
    let closeIndex = 0;
    let isCorrect = true;
    for (let i = 0; i < parentheses.length; i++) {
        if (open.includes(parentheses[i])) {
            openIndex = open.indexOf(parentheses[i]);
            stack.push(openIndex);
        } else if (parentheses[i] === '/' && parentheses[i + 1] === '>') {
            closeIndex = close.indexOf(parentheses[i]);
            if (stack.length === 0 || (stack.pop() !== closeIndex)) {
                isCorrect = false;
                break;
            }
         } else if (close.includes(parentheses[i])) {
            closeIndex = close.indexOf(parentheses[i]);
            if (stack.length === 0 || (stack.pop() !== closeIndex)) {
                isCorrect = false;
                break;
            }
        }
    }
    if (stack.length !== 0) {
        isCorrect = false;
    }
    console.log(isCorrect);
}

// main('()')
// main('[]')
main('</>')

// main('()')
main('(</>)')

// main(')(')
// main('([)]')