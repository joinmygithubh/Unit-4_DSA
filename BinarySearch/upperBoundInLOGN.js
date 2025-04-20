function runProgram(input) {
    const lines = input.trim().split("\n");
    const [n, k] = lines[0].trim().split(" ").map(Number);
    const arr = lines[1].trim().split(" ").map(Number);

    let low = 0;
    let high = n - 1;
    let ans = n; // Default to n (in case all elements are ≤ k)

    while (low <= high) {
        let mid = Math.floor((low + high) / 2);

        if (arr[mid] > k) {
            ans = mid; // potential answer
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }

    console.log(ans);
}