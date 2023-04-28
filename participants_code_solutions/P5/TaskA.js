function main() {
    let roman1 = 'MMXXIII'
    let roman2 = 'MDCCCIIXII'
    let roman3 = 'MCMLDDDII'
    
    console.log('Answer task A:' + convertRoman(roman1))
    console.log('Answer task A:' + convertRoman(roman2))
    console.log('Answer task A:' + convertRoman(roman3))
}

function convertRoman(romanNumber){
    let thousands = if(romanNumber.includes("M"), romanThousands('MM'), 0)//regex romanNumber
    let hundreds = 100
    let tens = 80
    let singles = 4
    return thousands + hundreds + tens + singles
}

function romanThousands(thousandsInRoman){
    let thousandsInNumberical = 0 
    if(thousandsInRoman.includes("C"), thousandsInNumberical = (len(thousandsInRoman)-2)*1000+900, thousandsInNumberical = len(thousandsInRoman)*1000)
    return thousandsInNumberical
}

main()