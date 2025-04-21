function runProgram(input) {
    input = input.trim().split("\n");
    const [N, Q] = input[0].trim().split(" ").map(Number);
    const arr = input[1].trim().split(" ").map(Number);
    
    const map = new Map();
    for (let i = 0; i < N; i++) {
        if (!map.has(arr[i])) map.set(arr[i], []);
        map.get(arr[i]).push(i + 1);
    }

    for (let i = 0; i < Q; i++) {
        const [left, right, value] = input[2 + i].trim().split(" ").map(Number);
        if (!map.has(value)) {
            console.log(0);
            continue;
        }

        const indices = map.get(value);

        const lower = lowerBound(indices, left);
        const upper = upperBound(indices, right);

        console.log(upper - lower);
    }

    function lowerBound(arr, target) {
        let low = 0, high = arr.length;
        while (low < high) {
            let mid = Math.floor((low + high) / 2);
            if (arr[mid] < target) low = mid + 1;
            else high = mid;
        }
        return low;
    }

    function upperBound(arr, target) {
        let low = 0, high = arr.length;
        while (low < high) {
            let mid = Math.floor((low + high) / 2);
            if (arr[mid] <= target) low = mid + 1;
            else high = mid;
        }
        return low;
    }
}
