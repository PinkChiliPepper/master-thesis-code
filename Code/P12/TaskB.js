function main() {
    console.log('Answer task B:')
    console.log(checkString("("));

}

const openingParantheses = ["(", "<", "["];
const closingParantheses = [")", "/>", "]"]; 


function checkString(string) {

    let openingParanthesesList = [];

    for (let i = 0; i < string.length; i++) {

       if (string[i] in openingParantheses) {
            console.log(string[i]);
            openingParanthesesList += string[i];
        }

        if (string[i] in closingParantheses || (string[i] + string[i+1]) in closingParantheses) {
            switch (string[i]) {
                case ')':
                    if (openingParanthesesList[openingParanthesesList.length] == '(') openingParanthesesList.pop();
                    else return false;
                    break;

                case ']':
                    if (openingParanthesesList[openingParanthesesList.length] == '[') openingParanthesesList.pop();
                    else return false;
                    break;


                case '/>':
                    if (openingParanthesesList[openingParanthesesList.length] == '<') openingParanthesesList.pop();
                    else return false;
                    break;
            }


        }

        if (openingParanthesesList.length > 0) return false;
        return true;


    }

}    

main()