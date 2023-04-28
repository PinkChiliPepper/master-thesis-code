function main() {
    console.log('Answer task B:')
}
function checkString(str){
    let index1=true;
    var index2=true ;
    var index3=true 
    
    if(str.indexOf("(")>-1 && str.indexOf("(")>-1 && str.indexOf(")")>str.indexOf("(")){
        index1= true;

    }
    if
    (str.indexOf("[")>-1 && str.indexOf("]")>-1 && str.indexOf("[")>str.indexOf("]")){
        index2= true;

    }
     if
    (str.indexOf("<")>-1 && str.indexOf("/>")>-1 && str.indexOf("/>")>str.indexOf("<")){
        index3=true;
    }
    return index1 && index2 && index3
}
console.log(checkString("(asdasd</>)"));
main()