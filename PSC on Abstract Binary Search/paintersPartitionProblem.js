function runProgram(input) {
    input = input.trim().split("\n");
    let t = +input[0];
    let line = 1;
  
    for (let test = 0; test < t; test++) {
      let [n, p] = input[line++].trim().split(" ").map(Number);
      let arr = input[line++].trim().split(" ").map(Number);
      console.log(minTime(arr, n, p));
    }
  }
  
  function minTime(arr, n, k) {
    let low = Math.max(...arr);
    let high = arr.reduce((a, b) => a + b, 0);
    let ans = high;
  
    while (low <= high) {
      let mid = Math.floor((low + high) / 2);
      if (canPaint(arr, n, k, mid)) {
        ans = mid;
        high = mid - 1;
      } else {
        low = mid + 1;
      }
    }
  
    return ans;
  }
  
  function canPaint(arr, n, k, maxTime) {
    let painters = 1;
    let currSum = 0;
  
    for (let i = 0; i < n; i++) {
      if (currSum + arr[i] <= maxTime) {
        currSum += arr[i];
      } else {
        painters++;
        currSum = arr[i];
        if (painters > k) return false;
      }
    }
    
  
    return true;
  }
  