function main() {
    console.log('Answer task B:')
}

function checkParentheses(pars) {
    var first = pars[0];
    var tail = pars[1..pars.length];
    
    if (first == '(') {
        return findClosing(tail);
    } else if (first == '[') {
        return findClosingAngled(tail)
    } else if (first == '<') {
        return findClosingPointy(tail)
    } else {
        return false;
    }
}

function findClosing(tail){
    var first = tail[0];
    var closeTail = tail[1..tail.length];

    if (first == ')') {
        return checkParentheses(closeTail);
    } else {
        return checkParentheses(tail) && findClosing();
    }
}

function findClosingAngled(tail){
    var first = tail[0];
    var closeTail = tail[1..tail.length];

    if (first == ']') {
        return checkParentheses(closeTail);
    } else {
        checkParentheses(tail);
    }
}

function findClosingPointy(tail){
    var first = tail[0];
    var closeTail = tail[1..tail.length];

    if (tail.startswith("/>")) {
        return checkParentheses(closeTail);
    } else {
        checkParentheses(tail);
    }
}

function checkNext(tail) {
    var first = tail[0];
    var tail2 = tail[1..tail.length];

    if (first == ')') {
        return checkParentheses
    } else if (first == ']') {
        checkNext(tail)
    } else if (tail.startswith("/>")) {
        checkNext(tail)
    }
}

main()