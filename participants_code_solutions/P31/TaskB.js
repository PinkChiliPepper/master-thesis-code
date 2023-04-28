// check if a string contains opening and closing parentheses in the correct order. return true if opening parentheses are followed by closing parentheses in the correct order. return false if opening parentheses are not followed by closing parentheses in the correct order. 
function main(str) {
    
    // split array when opening or closing parentheses are found. ')',']' and '/>' are closing parentheses. '(', '[' and '<' are opening parentheses.
    let arr = str.split(/(?=[\(\)\[\]\/\>])|(?<=[\(\)\[\]\/\>])/);
    
    
    let stack = [];
    let open = ["<", "[", "{", "("];
    let close = [">", "]", "}", ")"];
    for (let i = 0; i < arr.length; i++) {
        if (open.includes(arr[i])) {
            stack.push(arr[i]);
        } else if (close.includes(arr[i])) {
            let last = stack.pop();
            if (open.indexOf(last) !== close.indexOf(arr[i])) {
                return false;
            }
        }
    }
    if (stack.length !== 0) {
        return false;
    }
    return true;
}


console.log(main("</>"))