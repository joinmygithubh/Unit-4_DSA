function powerSum(X, N, num = 1) {
    let power = Math.pow(num, N);

    // Base Cases
    if (power > X) return 0;
    if (power === X) return 1;

    // Include current number + Exclude current number
    return powerSum(X - power, N, num + 1) + powerSum(X, N, num + 1);
}

// Example usage:
let input = "10 2";
let [X, N] = input.trim().split(" ").map(Number);

console.log(powerSum(X, N)); // Output: 1
