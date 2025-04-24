function runProgram(input) {
    let lines = input.trim().split("\n");
    let T = +lines[0];
  
    for (let i = 1; i <= T; i++) {
      let n = +lines[i];
      let ans = [];
  
      for (let j = 0; j <= n; j++) {
        let binary = j.toString(2);
        let count = 0;
  
        for (let bit of binary) {
          if (bit === '1') count++;
        }
  
        ans.push(count);
      }
  
      console.log(ans.join(" "));
    }
  }
  