function runProgram(input) {
    input = input.trim().split("\n");
    const [n, k] = input[0].split(" ").map(Number);
    const arr = input[1].split(" ").map(Number);

    function searchRotated(arr, k) {
        let low = 0, high = arr.length - 1;

        while (low <= high) {
            let mid = Math.floor((low + high) / 2);

            if (arr[mid] === k) return mid;

            if (arr[low] <= arr[mid]) {
                if (arr[low] <= k && k < arr[mid]) {
                    high = mid - 1;
                } else {
                    low = mid + 1;
                }
            }
            else {
                if (arr[mid] < k && k <= arr[high]) {
                    low = mid + 1;
                } else {
                    high = mid - 1;
                }
            }
        }
        return -1;
    }

    console.log(searchRotated(arr, k));
}