function main() {
    console.log('Answer task B:')
    console.log( readString( "(([/>))"))
}

function readString( string) {
    let stack = [];
    for (let i = 0; i < string.length; i++) {
        let parenthesis = string[ i];
        if( parenthesis == '(' ||
        parenthesis == '[' ||
        parenthesis == '<') {
            stack.push( parenthesis);
            // console.log( stack);
        }
        else if( parenthesis == ')') {
            let topElement = stack.pop( parenthesis);
            if( topElement != '(') {
                return "Expected ')', but returned: " + topElement + " at character " + (string.length + 1 - i);
            }
            // console.log( stack);
        }
        else if( parenthesis == ']') {
            let topElement = stack.pop( parenthesis);
            if( topElement != '[') {
                return "'[', but returned: " + topElement + " at character " + (string.length + 1 - i);
            }
            // console.log( stack);
        }
        else if( parenthesis == '>') {
            let topElement = stack.pop( parenthesis);
            if( topElement != '<') {
                return "Expected '/>', but returned: " + topElement + " at character " + (string.length + 1 - i);
            }
            // console.log( stack);
        }
        else if( parenthesis == '/') {
            continue;
        }
    }
    return "Valid string!";
}

main()