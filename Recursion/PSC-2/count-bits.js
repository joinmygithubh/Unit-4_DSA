// Count Bits
// Description
// Given an integer n, print an array ans of length n + 1 such that for each i (0 <= i <= n), ans[i] is the number of 1's in the binary representation of i.

// Input Description
// Input Format
// First line contains T, the number of test cases.

// First line of each test case contains integer n.

// Constraints
// 1 <= T <= 10

// 0 <= n <= 1000

// Output Description
// For each test case, print the array.

function runProgram(input) {
    input = input.trim().split('\n');
    let T = +input[0];
    let line = 1;

    for (let t = 0; t < T; t++) {
        let n = +input[line++];
        let ans = new Array(n + 1).fill(0);

        for (let i = 1; i <= n; i++) {
            ans[i] = ans[i >> 1] + (i & 1);
        }

        console.log(ans.join(' '));
    }
}

