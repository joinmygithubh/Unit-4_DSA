function runProgram(input) {
    let [a, b, c] = input.trim().split(" ").map(Number);
  
    if (a + b > c && a + c > b && b + c > a) {
      console.log("Yes");
    } else {
      console.log("No");
    }
  }
  