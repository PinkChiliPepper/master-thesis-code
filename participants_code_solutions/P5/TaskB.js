function main() {
    let parenthe1 = '()'
    let parenthe2 = '()()'
    let parenthe3 = '(</>)'
    let parenthe4 = '({[]})'
    let parenthe5 = '[<([]/>)]'
    let parenthe6 = '[<([])/>]'
    console.log('Answer task B:'+checkParenthesesInString(parenthe1))
    console.log('Answer task B:'+checkParenthesesInString(parenthe2))
    console.log('Answer task B:'+checkParenthesesInString(parenthe3))
    console.log('Answer task B:'+checkParenthesesInString(parenthe4))
    console.log('Answer task B:'+checkParenthesesInString(parenthe5))
    console.log('Answer task B:'+checkParenthesesInString(parenthe6))
}

function checkParenthesesInString(parenthesesString){
  // define parentheses as characters in the set '()[]</>'

  // check whether the string contains only parentheses
  if(!parenthesesString.match(/^[()<>[\]]+$/)){
    return false;
  }

  // check whether the parentheses in the set '()[]</>' in the string are balanced

  if(parenthesesString.match(/(\(\))|(\[\])|(\<\[/>])/)){
    return true;
  }

    return false;
}

function parenthesesCharacterSet(){
  return '()[]</>';
}

main()