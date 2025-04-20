// Binary Search Problem
// Description
// Given a sorted array with repeating integers. You need to find the first occurrence, last occurrence and count of a given key in the array. USE ONLY BINARY SEARCH. Your algorithm should run in LogN time. If element is not present print -1 -1 0.
// Input Description
// Input Format
// First line contains N, then N integers in next line, then key in the next line.
// Constraints
// N<=1000000
// Output Description
// Output Format
// 3 space separated integers for lower bound, upper bound and count/frequency of that key.
// Sample Input 1
// 6
// 1 1 1 2 2 2
// 1
// Sample Output 1
// 0 2 3RetryClaude does not have the ability to run the code it generates yet.Claude can make mistakes. Please double-check responses. 3.7 Sonnet

function runProgram(input) {
    input = input.trim().split("\n");
    const n = +input[0];
    const arr = input[1].trim().split(" ").map(Number);
    const key = +input[2];

    function lowerBound(arr, key) {
        let low = 0, high = arr.length - 1;
        let ans = -1;
        while (low <= high) {
            let mid = Math.floor((low + high) / 2);
            if (arr[mid] === key) {
                ans = mid;
                high = mid - 1;
            } else if (arr[mid] < key) {
                low = mid + 1;
            } else {
                high = mid - 1;
            }
        }
        return ans;
    }

    function upperBound(arr, key) {
        let low = 0, high = arr.length - 1;
        let ans = -1;
        while (low <= high) {
            let mid = Math.floor((low + high) / 2);
            if (arr[mid] === key) {
                ans = mid;
                low = mid + 1;
            } else if (arr[mid] < key) {
                low = mid + 1;
            } else {
                high = mid - 1;
            }
        }
        return ans;
    }

    const lb = lowerBound(arr, key);
    const ub = upperBound(arr, key);

    if (lb === -1 || ub === -1) {
        console.log("-1 -1 0");
    } else {
        const count = ub - lb + 1;
        console.log(`${lb} ${ub} ${count}`);
    }
}