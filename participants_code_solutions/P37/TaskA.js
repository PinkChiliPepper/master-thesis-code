function main(string) {
    console.log('Answer task A:')

    let array = string.split('');
    let sum = 0;

    for (let item = 0; item < array.length; item++) {
        if(array[item] === 'M' && array[item-1] !== 'C'){
            sum = sum + 1000;
            
        } else if ( array[item] === 'M' && array[item-1] === 'C'){
            sum = sum + 1000 -100;
            if (array[item-2] === 'C'){
                sum = sum-100
            }
            if (array[item-3] === 'C'){
                sum = sum -100
            }
            if (array[item-4] === 'C'){
                sum = sum -100
            }
        } 
        }


    console.log(array)
    console.log(sum)
}

main('M')
main('CM')
main('CCM')
main('CCCM')