function runProgram(input) {
    input = input.trim().split("\n");
    let n = +input[0];
    let arr = input[1].trim().split(" ").map(Number);
  
    quickSort(arr, 0, n - 1);
    console.log(arr.join(" "));
  }
  
  function quickSort(arr, low, high) {
    if (low < high) {
      let pi = partition(arr, low, high);
      quickSort(arr, low, pi - 1);   // Recursively sort left part
      quickSort(arr, pi + 1, high);  // Recursively sort right part
    }
  }
  
  function partition(arr, low, high) {
    let pivot = arr[high];  
    let i = low - 1;
  
    for (let j = low; j < high; j++) {
      if (arr[j] < pivot) {
        i++;
        [arr[i], arr[j]] = [arr[j], arr[i]];  
      }
    }
  
    [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];  
    return i + 1;
  }