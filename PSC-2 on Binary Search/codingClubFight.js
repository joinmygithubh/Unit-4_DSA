function runProgram(input) {
    input = input.trim().split('\n');
    const n = parseInt(input[0]);
    const soldierPowers = [];
    for (let i = 1; i <= n; i++) {
        soldierPowers.push(parseInt(input[i]));
    }
    const q = parseInt(input[n + 1]);
    for (let i = n + 2; i < input.length; i++) {
        const piyushPower = parseInt(input[i]);
        let killedCount = 0;
        let totalPower = 0;
        for (let j = 0; j < n; j++) {
            if (soldierPowers[j] <= piyushPower) {
                killedCount++;
                totalPower += soldierPowers[j];
            }
        }
        console.log(killedCount, totalPower);
    }
}
