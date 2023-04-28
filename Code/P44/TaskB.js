function main() {
    // check if parentheses are balanced
    const s = '()()()'
    const stack = []
    let isBalanced = true
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(' || s[i] === '<' || s[i] === '[') {
            stack.push(s[i])
        } else {
            if (stack.length === 0) {
                isBalanced = false
                break
            }
            stack.pop()
        }
    }
    if (stack.length !== 0) {
        isBalanced = false
    }
    console.log(isBalanced)

    // check if parentheses are balanced
    const s1 = '[][][]'
    const stack1 = []
    let isBalanced1 = true
    for (let i = 0; i < s1.length; i++) {
        if (s1[i] === '(' || s1[i] === '<' || s1[i] === '[') {
            stack1.push(s1[i])
        } else {
            if (stack1.length === 0) {
                isBalanced1 = false
                break
            }
            stack1.pop()
        }
    }
    if (stack1.length !== 0) {
        isBalanced1 = false
    }
    console.log(isBalanced1)

    // check if parentheses are balanced
    const s2 = ')()()()'
    const stack2 = []
    let isBalanced2 = true
    for (let i = 0; i < s2.length; i++) {
        if (s2[i] === '(' || s2[i] === '<' || s2[i] === '[') {
            stack2.push(s2[i])
        } else {
            if (stack2.length === 0) {
                isBalanced2 = false
                break
            }
            stack2.pop()
        }
    }
    if (stack2.length !== 0) {
        isBalanced2 = false
    }
    console.log(isBalanced2)

    // check if parentheses are balanced
    const s3 = '())(()'
    const stack3 = []
    let isBalanced3 = true
    for (let i = 0; i < s3.length; i++) {
        if (s3[i] === '(' || s3[i] === '<' || s3[i] === '[') {
            stack3.push(s3[i])
        } else {
            if (stack3.length === 0) {
                isBalanced3 = false
                break
            }
            stack3.pop()
        }
    }
    if (stack3.length !== 0) {
        console.log(isBalanced3)
    }

    // check if parentheses are balanced
    const s4 = '<><><>'
    const stack4 = []
    let isBalanced4 = true
    for (let i = 0; i < s4.length; i++) {
        if (s4[i] === '(' || s4[i] === '<' || s4[i] === '[') {
            stack4.push(s4[i])
        } else {
            if (stack4.length === 0) {
                isBalanced4 = false
                break
            }
            stack4.pop()
        }
    }
    if (stack4.length !== 0) {
        console.log(isBalanced4)
    }
}

main()

//