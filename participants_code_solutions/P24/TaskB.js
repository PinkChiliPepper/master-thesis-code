function main() {
    console.log('Answer task B:');
    checkString("()");
}

function checkString(string) {
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
            if (n_a < n_b) {
                return false;
            }
            n_b += 1;
        }
        else if (char == "<") {
            n_c += 1;
        }
        else if (char == "/") {
            var next = string[i+1];
            i++;
            if (next == ">") {
                if (n_c < n_d) {
                    return false;
                }
                n_d += 1;
            }
        }
        else if (char == "[") {
            n_e += 1;
        }
        else if (char == "]") {
            if (n_e < n_f) {
                return false;
            }
            n_f += 1;
        }
        
        return n_a == n_b && n_c == n_d && n_e == n_f;
    }
}

main()