function solve(N, arr){
    for (let i = 0; i < N - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < N; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }

    console.log(arr.join(" "));
}
