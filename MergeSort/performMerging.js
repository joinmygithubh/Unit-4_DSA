function performMerging(n,arr1,arr2) {
    //write code here
    let merged = [];
    let i = 0, j = 0;
  
    while (i < n && j < n) {
      if (arr1[i] <= arr2[j]) {
        merged.push(arr1[i]);
        i++;
      } else {
        merged.push(arr2[j]);
        j++;
      }
    }
  
    while (i < n) {
      merged.push(arr1[i]);
      i++;
    }
  
    while (j < n) {
      merged.push(arr2[j]);
      j++;
    }
  
    console.log(merged.join(" "));
  }