function main() {
    console.log('Answer task A:')
    const romanToInt = (s) => {
        const map = {
            I: 1,
            V: 5,
            X: 10,
            L: 50,
            C: 100,
            D: 500,
            M: 1000,
        };
        // Add exception for IIV = 8 
        let result = 0;
        if (s.includes('IIV')) {
            result += 8;
            s = s.replace('IIV', '');
        }
        for (let i = 0; i < s.length; i++) {
            if (map[s[i]] < map[s[i + 1]]) {
                result -= map[s[i]];
            } else {
                result += map[s[i]];
            }
        }
        return result;
    };
    console.log(romanToInt('IIV'));
    console.log(romanToInt('MCMXCIV'));
}

main()