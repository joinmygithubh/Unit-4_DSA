function runProgram(input) {
    const lines = input.trim().split("\n");
    const [n, k] = lines[0].trim().split(" ").map(Number);
    const arr = lines[1].trim().split(" ").map(Number);

    let low = 0;
    let high = n - 1;
    let ans = -1;

    while (low <= high) {
        let mid = Math.floor((low + high) / 2);

        if (arr[mid] === k) {
            ans = mid;       // Potential answer, but let's check if there's one earlier
            high = mid - 1;
        } else if (arr[mid] < k) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }

    console.log(ans);
}
