function main(numeral) {

    let text = numeral.toString();
    text = text.split('');
    let array = []
    text.forEach(function (char) {
    switch (char) {
        case '4':
            array.push('IV');
            break;
        case '9':
            array.push('IX');
            break;
        case '40':
            array.push('XL');
            break;
        case '90':
            array.push('XC');
            break;
        case '400':
            array.push('CD');
            break;
        case '900':
            array.push('CM');
            break;
    }
})

switch (char) {
    case '1':
        array.push('I');
        break;
    case '5':
        array.push('V');
        break;
}
    console.log(array.join(''))
}

main(40)