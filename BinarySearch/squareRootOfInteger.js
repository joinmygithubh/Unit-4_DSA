function runProgram(input) {
    const lines = input.trim().split('\n');
    const T = +lines[0];
    let result = [];

    for (let i = 1; i <= T; i++) {
        const N = +lines[i];
        result.push(floorSqrt(N));
    }

    console.log(result.join('\n'));
}

function floorSqrt(N) {
    if (N === 0 || N === 1) return N;

    let low = 1;
    let high = N;
    let ans = 0;

    while (low <= high) {
        let mid = Math.floor((low + high) / 2);

        if (mid * mid === N) {
            return mid;
        } else if (mid * mid < N) {
            ans = mid;        // store floor
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }

    return ans;
}

