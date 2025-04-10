function runProgram(input) {
    input = input.trim().split('\n');
    let T = +input[0];
  
    let line = 1;
    for (let i = 0; i < T; i++) {
      let n = +input[line++];
      const memo = {};
      console.log(waysToZero(n, memo));
    }
  }
  
  function waysToZero(n, memo) {
    if (n < 0) return 0;
    if (n === 0) return 1;
    if (memo[n] !== undefined) return memo[n];
  
    memo[n] = waysToZero(n - 1, memo) + waysToZero(n - 2, memo) + waysToZero(n - 5, memo);
    return memo[n];
  }
  