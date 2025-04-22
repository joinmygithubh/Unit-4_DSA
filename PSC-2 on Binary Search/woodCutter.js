function runProgram(input) {
    input = input.trim().split("\n");
    const [N, M] = input[0].trim().split(" ").map(Number);
    const heights = input[1].trim().split(" ").map(Number);

    let low = 0;
    let high = Math.max(...heights);
    let answer = 0;

    const woodCollected = (cutHeight) => {
        let total = 0;
        for (let h of heights) {
            if (h > cutHeight) {
                total += (h - cutHeight);
            }
        }
        return total;
    };

    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        const wood = woodCollected(mid);

        if (wood >= M) {
            answer = mid; 
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }

    console.log(answer);
}



if (process.env.USER === "") {
  runProgram(``);
} else {
  process.stdin.resume();
  process.stdin.setEncoding("ascii");
  let read = "";
  process.stdin.on("data", function (input) {
    read += input;
  });
  process.stdin.on("end", function () {
    read = read.replace(/\n$/, "");
    read = read.replace(/\n$/, "");
    runProgram(read);
  });
  process.on("SIGINT", function () {
    read = read.replace(/\n$/, "");
    runProgram(read);
    process.exit(0);
  });
}
