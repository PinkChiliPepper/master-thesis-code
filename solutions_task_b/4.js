function main() {
    console.log(checkParentheses(')')) // false
    console.log(checkParentheses(')(')) // false
    console.log(checkParentheses('())')) // false
    console.log(checkParentheses('([)]')) // false
    console.log(checkParentheses('<[/>]')) // false

    console.log(checkParentheses('()[]</>()')) // true
    console.log(checkParentheses('([]</>)')) // true
    console.log(checkParentheses('((((</>))))')) // true
}
main()

// 4. Counter.
// Answer by P24.
// Small changes to make it correct:
//  * Return statement was in the for loop instead of outside the for loop
//  * Check for count closed > count open was before the count was increased,
//    moved it to after the count was increased.
//  * Check for incorrect combinations of brackets.
function checkParentheses(string) {
    const falseCombinations = ["(]", "(/>", "[)", "[/>", "</)", "</]"]
    for (let i = 0; i < falseCombinations.length; i++) {
        if (string.includes(falseCombinations[i])) return false
    }

    var n_a = 0; // Number of (
    var n_b = 0; // Number of )
    var n_c = 0; // Number of <
    var n_d = 0; // Number of />
    var n_e = 0; // Number of [
    var n_f = 0; // Number of ]

    for (var i = 0; i < string.length; i++) {
        var char = string[i];
        if (char == "(") {
            n_a += 1;
        }
        else if (char == ")") {
            n_b += 1;
            if (n_a < n_b) {
                return false;
            }
        }
        else if (char == "<") {
            n_c += 1;
        }
        else if (char == "/") {
            var next = string[i+1];
            i++;
            if (next == ">") {
                n_d += 1;
                if (n_c < n_d) {
                    return false;
                }
            }
        }
        else if (char == "[") {
            n_e += 1;
        }
        else if (char == "]") {
            n_f += 1;
            if (n_e < n_f) {
                return false;
            }
        }
    }
    return n_a == n_b && n_c == n_d && n_e == n_f;
}