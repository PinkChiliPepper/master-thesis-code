function main(input) {
    var parantheses = {
    '(':')',
    '<':'>',
    '[':']',
    '{':'}',
    }
    brackets = []
    for (let i = 0; i < input.length; i++) {
        if (input[i] in parantheses){
            brackets += input[i]
            console.log(input[i])
        }
        if (input[i] == parantheses[brackets.at(-1)]){
            console.log(input[i])
            brackets.pop()
        }

      }
    console.log(brackets)
    console.log('Answer task B:')
    
}

main('(</>)')
main('([)]')