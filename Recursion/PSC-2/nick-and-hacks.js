function runProgram(input) {
    input = input.trim().split("\n");
    let T = +input[0];
    for (let i = 1; i <= T; i++) {
        let n = BigInt(input[i].trim());
        console.log(nickAndHack(n));
    }
}

function nickAndHack(n) {
    while (n > 1n) {
        if (n % 20n === 0n) {
            n = n / 20n;
        } else if (n % 10n === 0n) {
            n = n / 10n;
        } else {
            return "No";
        }
    }
    return "Yes";
}