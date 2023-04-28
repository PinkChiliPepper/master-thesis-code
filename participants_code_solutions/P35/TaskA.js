function main(a) {
    console.log('Answer task A:')
    numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    roman = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X']

    if a.includes?(roman)  {
        replace(roman, numbers)
    else if a == "L"
        if a.previous? == "X"
            a = 40
        else 
            a = 50
        end
    end 
    if a == "C"
        if a.previous? == "X"
            a = 90
        else 
            a = 100
        end
    end
    if a == "D"
        if a.previous? == "C"
            a = 400
        else 
            a = 500
        end
    end 
    if a == "M"
        if a.previous? == "C"
            a = 900
        else 
            a = 1000
        end
    end
}

main()