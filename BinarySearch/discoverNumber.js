// Discover number
// Description
// You are given an array A of size N, and Q queries to deal with. For each query, you are given an integer X, and you're supposed to find out if X is present in the array A or not.
// Input Description
// Input Format
// The first line contains two integers, N and Q, denoting the size of array A and number of queries.
// The second line contains N space separated integers, denoting the array of elements Ai.
// The next Q lines contain a single integer X per line.
// Constraints
// 1 <= N, Q <= 10^5
// 1 <= Ai <= 10^9
// 1 <= X <= 10^9
// Output Description
// Output Format
// For each query, print YES if the X is in the array, otherwise print NO.
// Sample Input 1
// 5 10
// 50 40 30 20 10
// 10
// 20
// 30
// 40
// 50
// 60
// 70
// 80
// 90
// 100
// Sample Output 1
// YES
// YES
// YES
// YES
// YES
// NO
// NO
// NO
// NO
// NORetryClaude does not have the ability to run the code it generates yet.Claude can make mistakes. Please double-check responses. 3.7 Sonnet

function runProgram(input) {
    const lines = input.trim().split("\n");
    const [N, Q] = lines[0].trim().split(" ").map(Number);
    const arr = lines[1].trim().split(" ").map(Number);
    const queries = lines.slice(2, 2 + Q).map(Number);

    // Use Set for fast lookup
    const set = new Set(arr);

    for (let i = 0; i < Q; i++) {
        if (set.has(queries[i])) {
            console.log("YES");
        } else {
            console.log("NO");
        }
    }
}