//Find the sum of the array given the elements of the array.
//The only constraint is that you have to write a recursive code.

function runProgram(input) {
    input = input.trim().split("\n");
    let t = parseInt(input[0]);
    let line = 1;

    for (let i = 0; i < t; i++) {
        let n = parseInt(input[line]);
        let arr = input[line + 1].trim().split(" ").map(Number);
        console.log(sumRecursive(arr, 0));
        line += 2;
    }
}

function sumRecursive(arr, idx) {
    if (idx === arr.length) return 0;
    return arr[idx] + sumRecursive(arr, idx + 1);
}

