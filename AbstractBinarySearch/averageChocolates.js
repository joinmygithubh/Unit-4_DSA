function runProgram(input) {
    input = input.trim().split('\n');
    let N = +input[0];
    let A = input[1].trim().split(' ').map(Number);
    let Q = +input[2];
    let queries = input.slice(3, 3 + Q).map(Number);

    A.sort((a, b) => a - b);
    let prefix = [];
    prefix[0] = A[0];
    for (let i = 1; i < N; i++) {
        prefix[i] = prefix[i - 1] + A[i];
    }

    for (let k of queries) {
        let ans = 0;
        for (let i = 0; i < N; i++) {
            if (prefix[i] < k * (i + 1)) {
                ans = i + 1;
            } else {
                break;
            }
        }
        console.log(ans);
    }
}
