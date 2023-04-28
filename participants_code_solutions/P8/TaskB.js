function parenthesisValidator(input) {
    var open = ['(', '[', '{', '<']
    var close = [')', ']', '}', '/>']
    var stack = []


    for (var i=0; i<input.length; i++) {



        if (open.indexOf(input[i]) !== -1) {
            stack.push(input[i])
        } else if (input[i] === '/' && input[i+1] === '>' && close.indexOf('/>') !== -1) {
            var last = stack.pop()
            if (last !== open[close.indexOf('/>')]) {
                return false
            }
        } else if (close.indexOf(input[i]) !== -1) {
            var last = stack.pop()
            if (last !== open[close.indexOf(input[i])]) {
                return false
            }
        }
    }
    if (stack.length === 0) {
        return true
    } else {
        return false
    }
}


function main() {
    console.log('Answer task B:')

    var inputs = [
        ['</>', true],
        ['()()[][]()</>', true],
        ['()()[][]()</', false],
        ['()()[][()</>', false],
        ['())[][]()</>', false],
        ['()()[][]()<>', false],
    ]
    for (var i=0; i<inputs.length; i++) {
        console.log(inputs[i][0], inputs[i][1] === parenthesisValidator(inputs[i][0]))
    }
}

main()