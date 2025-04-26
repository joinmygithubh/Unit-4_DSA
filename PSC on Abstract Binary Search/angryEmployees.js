function runProgram(input) {
    input = input.trim().split('\n');
    let t = +input[0];
    let index = 1;
  
    for (let test = 0; test < t; test++) {
      let [n, c] = input[index++].trim().split(' ').map(Number);
      let positions = [];
      for (let i = 0; i < n; i++) {
        positions.push(+input[index++]);
      }
  
      positions.sort((a, b) => a - b);
  
      let low = 1;
      let high = positions[n - 1] - positions[0];
      let result = 0;
  
      while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        if (canPlace(positions, c, mid)) {
          result = mid;
          low = mid + 1;
        } else {
          high = mid - 1;
        }
      }
  
      console.log(result);
    }
  }
  
  function canPlace(arr, cows, dist) {
    let count = 1;
    let lastPos = arr[0];
  
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] - lastPos >= dist) {
        count++;
        lastPos = arr[i];
      }

      
      if (count >= cows) return true;
    }
  
    return false;
  }