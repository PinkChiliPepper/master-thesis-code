function main() {
    console.log('Answer task A:')
    const input = prompt("Please enter the number you would like to convert: ");
    
    console.log(converter(input));
}

function converter(b)
{
    let a = parseInt(b)
    if(a===5)
    {
        return 'V'
    }

    if(a===10)
    {
        return 'X'
    }

    if(a===50)
    {
        return 'L'
    }

    if(a===100)
    {
        return 'C'
    }

    if(a===500)
    {
        return 'D'
    }
    if(a===1000)
    {
        return 'M'
    }

    if(a<5)
    {
        console.log('I');
        converter(a-1);
    }

    if(a<10)
    {
        console.log('V')
        converter(a-5);
    }

    if(a<50)
    {
        console.log('X')
        converter(a-10);
    }

    if(a<100)
    {
        console.log('L')
        converter(a-50);
    }

    if(a<500)
    {
        console.log('C')
        converter(a-100);
    }

    if(a<1000)
    {
        console.log('D')
        converter(a-500);
    }

    if(a>1000)
    {
        console.log('M');
        converter(a-1000);
    }

}
main()