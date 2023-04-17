function main() {
    console.log(romanToInt('IIX')) // 8
    console.log(romanToInt('XIIX')) // 18
    console.log(romanToInt('XXIV')) // 24
}
main()

// 3. Brute force.
// No participant coded this, this solution was only mentioned
// during the brainstorming task.
function romanToInt(str) {
    switch (str) {
        case 'I':
            return 1
        case 'II':
            return 2
        case 'III':
            return 3
        case 'IV':
            return 4
        case 'V':
            return 5
        case 'VI':
            return 6
        case 'VII':
            return 7
        case 'IIX':
            return 8
        case 'IX':
            return 9
        case 'X':
            return 10
        case 'XI':
            return 11
        case 'XII':
            return 12
        case 'XIII':
            return 13
        case 'XIV':
            return 14
        case 'XV':
            return 15
        case 'XVI':
            return 16
        case 'XVII':
            return 17
        case 'XIIX':
            return 18
        case 'XIX':
            return 19
        case 'XX':
            return 20
        case 'XXI':
            return 21
        case 'XXII':
            return 22
        case 'XXIII':
            return 23
        case 'XXIV':
            return 24
        case 'XXV':
            return 25
        case 'XXVI':
            return 26
        case 'XXVII':
            return 27
        case 'XXIIX':
            return 28
        case 'XXIX':
            return 29
        case 'XXX':
            return 30
        // etc...
        default:
            return 0
    }
}