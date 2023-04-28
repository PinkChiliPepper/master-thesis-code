function main() {
    console.log('Answer task B:')

}

main()

// Transform parenthesis so that '/>' becomes '>'
function changeParenthesis(p){
    let pNew = [];
    
    for (let i=0; i<p.lenght;i++){
        try{
            if (p[i]=='/' && p[i+1]=='>'){
                pNew.push('>');
                continue;
            }
        }catch(err){
            //do nothing
        }
        pNew.push(p[i])
    }
    return pNew;
}

function validateParentheses(p){

    let size = p.lenght;

    if (size ==0 || p[0]==')' ||  p[0]==']' ||  p[0]=='/'){
        return false;
    }

    let ar = [];
    ar.push(p[0]);

    for (let i=1; i < p.lenght ;i++){
        
        if (p[i]==')' && ar[i]!='(') return false;
        if (p[i]==']' && ar[i]!='[') return false;
        if (p[i]=='<' && ar[i]!='>') return false;

        if (p[i]==')' && ar[i] =='('){
            ar.pop();
            continue;
        }
        if (p[i]==']' && ar[i] =='[') {
            ar.pop();
            continue;
        }
        if (p[i]=='<' && ar[i] =='>') {
            ar.pop();
            continue;
        }
        ar.push(p[i]);
    }

    if (ar.length!=0) return false;


}