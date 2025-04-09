function runProgram(input) {
    input = input.trim().split("\n");
    let n = parseInt(input[0]);
    let arr = input[1].trim().split(" ").map(Number);
    
    recursiveBubbleSort(arr, n);
    
    console.log(arr.join(" "));
}

function recursiveBubbleSort(arr, n) {
    if (n === 1) return;

    for (let i = 0; i < n - 1; i++) {
        if (arr[i] > arr[i + 1]) {
            [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        }
    }

    recursiveBubbleSort(arr, n - 1);
}

