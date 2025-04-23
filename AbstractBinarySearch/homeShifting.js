function runProgram(input) {
    input = input.trim().split('\n');
    let t = +input[0];
    let line = 1;

    while (t--) {
        let [n, d] = input[line++].trim().split(" ").map(Number);
        let weights = input[line++].trim().split(" ").map(Number);
        let low = Math.max(...weights);
        let high = weights.reduce((a, b) => a + b, 0);
        let ans = high;

        while (low <= high) {
            let mid = Math.floor((low + high) / 2);
            if (canShip(weights, d, mid)) {
                ans = mid;
                high = mid - 1;
            } else {
                low = mid + 1;
            }
        }

        console.log(ans);
    }
}

function canShip(weights, days, capacity) {
    let daysNeeded = 1;
    let current = 0;

    for (let w of weights) {
        if (current + w > capacity) {
            daysNeeded++;
            current = w;
        } else {
            current += w;
        }
    }

    return daysNeeded <= days;
}
