function main() {
    console.log('Answer task B:')
}

function validate(s) {
    let string = s
    const open = ["(", "[", "<"]
    const close = [")", "]", "/>", "/"]
    while(s.length > 0) {
       if(close.includes(string[0])) {return false} else {
        if (string[0] === "(") {
            string = string.slice(1)
            if (string[string.length] !== ")") {return false} else{
            string = string.slice(0, string.length)}
        } else if(string[0] === "[") {
            string = string.slice(1)
            if (string[string.length] !== "]") {return false} else{
            string = string.slice(0, string.length)}
        } else {
            string = string.slice(1)
            if (string.slice(string.length-1) !== "/>") {return false} else{
                string = string.slice(0, string.length- 1)
        }
       }
       return true
    }}
}

main()