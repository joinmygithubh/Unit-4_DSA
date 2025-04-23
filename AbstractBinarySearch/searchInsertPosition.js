function runProgram(input) {
    input = input.trim().split('\n');
    let T = +input[0];
    let line = 1;

    for (let i = 0; i < T; i++) {
        let [N, target] = input[line++].trim().split(' ').map(Number);
        let arr = input[line++].trim().split(' ').map(Number);
        console.log(findInsertPosition(arr, target));
    }
}

function findInsertPosition(arr, target) {
    let low = 0, high = arr.length - 1;
    
    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        
        if (arr[mid] === target) {
            return mid;
        } else if (arr[mid] < target) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }

    return low;
}