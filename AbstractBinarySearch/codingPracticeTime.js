function runProgram(input) {
    input = input.trim().split('\n');
    let [N, M] = input[0].split(' ').map(Number);
    let arr = input[1].split(' ').map(Number);

    let low = Math.max(...arr);
    let high = arr.reduce((a, b) => a + b, 0);
    let result = high;

    while (low <= high) {
        let mid = Math.floor((low + high) / 2);

        if (isPossible(arr, M, mid)) {
            result = mid;
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }

    console.log(result);
}

function isPossible(arr, M, maxTime) {
    let dayCount = 1;
    let currentSum = 0;

    for (let i = 0; i < arr.length; i++) {
        if (currentSum + arr[i] > maxTime) {
            dayCount++;
            currentSum = arr[i];
        } else {
            currentSum += arr[i];
        }

        if (dayCount > M) return false;
    }

    return true;
}