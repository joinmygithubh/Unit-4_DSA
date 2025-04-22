function runProgram(input) {
    input = input.trim().split("\n");
    let t = +input[0];
    let line = 1;

    while (t--) {
        let [n, c] = input[line++].trim().split(" ").map(Number);
        let arr = input[line++].trim().split(" ").map(Number);
        arr.sort((a, b) => a - b);

        function canPlaceCustomers(minDist) {
            let count = 1;
            let lastPlaced = arr[0];

            for (let i = 1; i < n; i++) {
                if (arr[i] - lastPlaced >= minDist) {
                    count++;
                    lastPlaced = arr[i];
                    if (count === c) return true;
                }
            }
            return false;
        }

        let low = 0, high = arr[n - 1] - arr[0];
        let result = 0;

        while (low <= high) {
            let mid = Math.floor((low + high) / 2);
            if (canPlaceCustomers(mid)) {
                result = mid;
                low = mid + 1;
            } else {
                high = mid - 1;
            }
        }

        console.log(result);
    }
}