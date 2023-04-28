function main(string) {
    console.log('Answer task B:')
    // create a function that returns if the parantheses are balanced for () [] < />
    // example: (a + b) * (c + d) -> true
    // example: (a + b) * (c + d -> false
    var parantheses = []
    var string_array = string.split('')
    
    for(var i = 0; i < string_array.length; i++){
        if(string_array[i] == '(' || string_array[i] == '[' || string_array[i] == '<'){
            parantheses.push(string_array[i])
        }
        if(string_array[i] == ')' || string_array[i] == ']' || string_array[i] == '/'){
            if(parantheses.length == 0) {
                return false}
            if(string_array[i] == ')' && parantheses[parantheses.length-1] == '('){
                parantheses.pop()
            } 
            else if(string_array[i] == ']' && parantheses[parantheses.length-1] == '['){
                parantheses.pop()
            } 
            else if(string_array[i] == '/' && string_array[i+1] == '>' && parantheses[parantheses.length-1] == '<'){
                parantheses.pop()
            } else { return false }
        }
        if( i == string_array.length-1)
            if(parantheses.length == 0)
                return true
            else { return false }
    }
}

let string = "(a + b) * (c + d)"
console.log(main(string))

let string1 = " (a + b) * (c + d "
console.log(main(string1))

let string2 = "(a + b) * (c + d) < />"
console.log(main(string2))

let string3 = "(a + b) * (c + d) < >"
console.log(main(string3))

let string4 = "(a + b) * (c + d) )"
console.log(main(string4))

let string5 = "(((("
console.log(main(string5))