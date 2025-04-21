function runProgram(input) {
    input = input.trim().split('\n');
    let t = +input[0];
    let line = 1;

    for (let i = 0; i < t; i++) {
        let n = +input[line++];
        let arr = input[line++].trim().split(" ").map(Number);
        let found = -1;

        for (let j = 0; j < n; j++) {
            let left = j === 0 ? -Infinity : arr[j - 1];
            let right = j === n - 1 ? -Infinity : arr[j + 1];
            if (arr[j] > left && arr[j] > right) {
                found = j;
                break;
            }
        }

        console.log(found);
    }
}
