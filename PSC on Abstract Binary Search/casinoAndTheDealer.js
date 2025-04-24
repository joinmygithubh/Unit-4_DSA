function runProgram(input) {
    input = input.trim().split('\n');
    let t = +input[0];
    let index = 1;
  
    for (let test = 0; test < t; test++) {
      let [n, m, k] = input[index++].trim().split(' ').map(Number);
      let T = input[index++].trim().split(' ').map(Number);
  
      let low = Math.min(...T);
      let high = Math.max(...T);
      let ans = -1;
  
      while (low <= high) {
        let mid = Math.floor((low + high) / 2);
  
        if (canMakeDecks(T, n, m, k, mid)) {
          ans = mid;
          high = mid - 1;
        } else {
          low = mid + 1;
        }
      }
  
      console.log(ans);
    }
  }
  
  function canMakeDecks(T, n, m, k, time) {
    let count = 0;
    let i = 0;
  
    while (i <= n - k) {
      let valid = true;
      for (let j = 0; j < k; j++) {
        if (T[i + j] > time) {
          valid = false;
          break;
        }
      }
  
      if (valid) {
        count++;
        i += k;
      } else {
        i++;
      }
  
      if (count >= m) return true;
    }
  
    return false;
  }