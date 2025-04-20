// Missing Letters
// Description
// For your friend's birthday, you decide to throw a surprise party. You instruct all the guests to follow suit and come dressed in a shirt that has a letter written on it. You are planning to form "Happy Birthday" with people standing in two rows. Each guest is numbered in ascending order; for example- the 0th guest will come in a shirt that has "H" written on it, 1st guest will come with "A" and so on until they complete "Happy Birthday" (13 guests). But due to some reasons, 3 guests couldn't come to the party, and you had no backup guests. You want to find which is the first letter from Happy Birthday that is missing and find the guest who was assigned the letter in Log(n) time.
// Input Description
// First line contains the number of cases (t)
// The next t lines contain 10 evenly spaced integers in ascending order. The numbers are from 0-12 but have some numbers missing.
// t <= 1000000
// Output Description
// You need to output the first number from 0-12 that is missing in each case.
// Sample Input 1
// 2
// 0 1 2 4 5 6 9 10 11 12
// 1 2 3 5 7 8 9 10 11 12
// Sample Output 1
// 3
// 0RetryClaude does not have the ability to run the code it generates yet.Claude can make mistakes. Please double-check responses.

function runProgram(input) {
    input = input.trim().split('\n');
    const T = +input[0];

    for (let i = 1; i <= T; i++) {
        let arr = input[i].trim().split(' ').map(Number);
        console.log(findMissing(arr));
    }
}

function findMissing(arr) {
    let low = 0, high = arr.length - 1;
    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        if (arr[mid] === mid) {
            // no mismatch so far, missing must be on the right
            low = mid + 1;
        } else {
            // mismatch found, missing is at mid or before
            high = mid - 1;
        }
    }
    return low;
}
