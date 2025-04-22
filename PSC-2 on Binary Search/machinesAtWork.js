function runProgram(input) {
    input = input.trim().split("\n");
    const [n, goal] = input[0].split(" ").map(Number);
    const machines = input[1].split(" ").map(Number);

    let low = 1;
    let high = Math.min(...machines) * goal;
    let answer = high;

    const canProduce = (days) => {
        let total = 0;
        for (let i = 0; i < n; i++) {
            total += Math.floor(days / machines[i]);
            if (total >= goal) return true; 
        }
        return total >= goal;
    };

    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        if (canProduce(mid)) {
            answer = mid;
            high = mid - 1;
        } else {
            low = mid + 1; 
        }
    }

    console.log(answer);
}