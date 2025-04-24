function runProgram(input) {
    input = input.trim().split('\n');
    let [n, k] = input[0].trim().split(' ').map(Number);
    let houses = input[1].trim().split(' ').map(Number);

    houses.sort((a, b) => a - b);

    let low = 0;
    let high = houses[n - 1] - houses[0];
    let ans = high;

    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        if (canCover(houses, k, mid)) {
            ans = mid;
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }

    console.log(ans);
}
function canCover(houses, k, range) {
    let towers = 0;
    let i = 0;
    let n = houses.length;

    while (i < n) {
        towers++;
        let loc = houses[i] + range;
        while (i < n && houses[i] <= loc + range) {
            i++;
        }
    }
    return towers <= k;
}
