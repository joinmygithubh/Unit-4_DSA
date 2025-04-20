// Number of Occurrences in logn
// Description
// You are given n different numbers and an integer k. Write a program that finds number of times k is present in log(n) time complexity.
// NOTE: YOU MUST NOT USE BRUTE FORCE SOLUTION
// WE KNOW THAT YOU KNOW BRUTE FORCE SOLUTION AND WANT YOU TRY THE LOGN SOLUTION
// USING BRUTE FORCE/LINEAR SEARCH IN THIS CASE WOULD LEAD TO DISQUALIFICATION
// Input Description
// Input Format:
// First line contains N and K
// Second line contains N space separated sorted integers
// Constraints:
// N <100
// Output Description
// Print number of times that number is present in the given list
// Sample Input 1
// 6 3
// 2 3 3 3 6 9
// Sample Output 1
// 3RetryClaude does not have the ability to run the code it generates yet.Claude can make mistakes. Please double-check responses. 3.7 Sonnet

function runProgram(input) {
    input = input.trim().split('\n');
    let [n, k] = input[0].trim().split(' ').map(Number);
    let arr = input[1].trim().split(' ').map(Number);
    
    const first = findFirst(arr, k);
    if (first === -1) {
        console.log(0);
        return;
    }
    const last = findLast(arr, k);
    console.log(last - first + 1);
}

function findFirst(arr, k) {
    let low = 0, high = arr.length - 1, result = -1;
    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        if (arr[mid] === k) {
            result = mid;
            high = mid - 1;
        } else if (arr[mid] < k) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }
    return result;
}

function findLast(arr, k) {
    let low = 0, high = arr.length - 1, result = -1;
    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        if (arr[mid] === k) {
            result = mid;
            low = mid + 1;
        } else if (arr[mid] < k) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }
    return result;
}