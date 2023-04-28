function main() {
    console.log('Answer task B:')
    let first = validator('</>')
    let third = validator('()')
    let second = validator('(<)/>')
    console.log(first)
    console.log(second)
    console.log(third)

}

// </> () []

main()

function validator(n){
    const typeStructure = {
        '<' : 1,
        '/' : -0.5,
        '>' : -0.5,
        '(' : 2,
        ')' : -2,
        '[' : 3,
        ']' : -3,
    }
    let result = 'false'

    for(let i = 0; i < n.length - 1; i += 2){
        
        let value = typeStructure[n[i]] + typeStructure[n[i+1]]
        if(value == 0) result = 'true'
        else result = 'false'
    } 

    return result

    
}


function validator2(n){
    const typeStructure = {
        '<' : 1,
        '/' : -0.5,
        '>' : -0.5,
        '(' : 2,
        ')' : -2,
        '[' : 3,
        ']' : -3,
    }
    let result = 'false'

    for(let i = 0; i < n.length - 1; i += 2){
        if(n[i] == '('){
            for(let j = i; j < n.length; i++){
                if(n[j] == '(')result = 'true'
                else result = 'false'
            }
        }else if(n[i] == '['){
            for(let j = i; j < n.length; i++){
                if(n[j] == ']')result = 'true'
                else result = 'false'
            }

        }else if(n[i] == '<'){
            for(let j = i; j < n.length; i++){
                if(n[j] == '/' && n[j++] == '>')result = 'true'
                else result = 'false'
            }

        }
        
       
        if(value == 0) result = 'true'
        else result = 'false'
    } 

    return result

    
}



