function solve(N, arr) {
    for (let i = 0; i < N - 1; i++) {
        for (let j = 0; j < N - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
    console.log(arr.join(" "));
}
