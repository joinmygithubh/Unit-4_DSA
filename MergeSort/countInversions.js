function runProgram(input) {
    input = input.trim().split("\n");
     let n = +input[0];
     let arr = input[1].trim().split(" ").map(Number);
   
     let result = countInversions(arr);
     console.log(result);
   }
   
   function countInversions(arr) {
     let tempArr = Array(arr.length);
     return mergeSortAndCount(arr, tempArr, 0, arr.length - 1);
   }
   
   function mergeSortAndCount(arr, tempArr, left, right) {
     let invCount = 0;
   
     if (left < right) {
       let mid = Math.floor((left + right) / 2);
   
       invCount += mergeSortAndCount(arr, tempArr, left, mid);
       invCount += mergeSortAndCount(arr, tempArr, mid + 1, right);
       invCount += merge(arr, tempArr, left, mid, right);
     }
   
     return invCount;
   }
   
   function merge(arr, tempArr, left, mid, right) {
     let i = left;      
     let j = mid + 1;  
     let k = left;   
     let invCount = 0;
   
     while (i <= mid && j <= right) {
       if (arr[i] <= arr[j]) {
         tempArr[k++] = arr[i++];
       } else {
         tempArr[k++] = arr[j++];
         invCount += (mid - i + 1); 
       }
     }
   
     while (i <= mid) {
       tempArr[k++] = arr[i++];
     }
   
     while (j <= right) {
       tempArr[k++] = arr[j++];
     }
   
     for (let p = left; p <= right; p++) {
       arr[p] = tempArr[p];
     }
   
     return invCount;
   }