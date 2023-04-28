function main(checkedtring) {
    let closingParantheses = ["]", ")", ">"]
    let openingParantheses = ["[", "(", "<"]
    let checkedparentheses = [];
    let checkedarray = checkedtring.split("");
    console.log('Answer task B:')
    console.log(closingParantheses, openingParantheses, checkedtring)
    console.log(checkedarray)
    for (let i = 0; i < checkedarray.length; i++) {
       if (openingParantheses.includes(checkedarray[i])) {
        checkedparentheses.push(checkedarray[i])
        }
        if (closingParantheses.includes(checkedarray[i])) {
            console.log(checkedarray[i])
        }
      }
    console.log(checkedparentheses)
    return true
}

let correctString = "[(<>)]";
// eslint-disable-next-line no-unused-vars
let incorectString = "[(])]"
main(correctString )



