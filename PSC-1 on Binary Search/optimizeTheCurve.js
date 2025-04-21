function runProgram(input) {
    input = input.trim().split('\n');
    const T = +input[0];
    
    for (let i = 1; i <= T; i++) {
        let [A, B, C, K] = input[i].trim().split(" ").map(Number);

        let low = 0, high = 1e6, ans = -1;
        while (low <= high) {
            let mid = Math.floor((low + high) / 2);
            let val = A * mid * mid + B * mid + C;
            if (val >= K) {
                ans = mid;
                high = mid - 1;
            } else {
                low = mid + 1;
            }
        }
        
        console.log(ans);
    }
}
