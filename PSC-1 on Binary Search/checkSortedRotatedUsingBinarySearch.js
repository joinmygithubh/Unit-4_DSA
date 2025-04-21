function runProgram(input) {
    input = input.trim().split('\n');
    let n = +input[0];
    let arr = input[1].trim().split(' ').map(Number);

    let count = 0;
    for (let i = 0; i < n; i++) {
        if (arr[i] > arr[(i + 1) % n]) {
            count++;
        }
    }

    if (count === 1) {
        console.log("YES");
    } else {
        console.log("NO");
    }
}
