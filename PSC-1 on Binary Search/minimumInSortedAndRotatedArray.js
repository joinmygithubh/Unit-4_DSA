function runProgram(input) {
    input = input.trim().split("\n");
    let n = +input[0];
    let arr = input[1].trim().split(" ").map(Number);

    function findMin(arr, n) {
        let low = 0;
        let high = n - 1;

        while (low < high) {
            let mid = Math.floor((low + high) / 2);

            if (arr[mid] > arr[high]) {
                low = mid + 1;
            } else {
                high = mid;
            }
        }
        return arr[low];
    }

    console.log(findMin(arr, n));
}
