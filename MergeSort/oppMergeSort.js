//Given a list of n integers. Write a program for merge sort algorithm such that
//it reverses the list in descending order.  You must not write any other sorting algorithm

function runProgram(input) {
    input = input.trim().split("\n");
     const n = +input[0];
     const arr = input[1].trim().split(" ").map(Number);
   
     const sortedArr = mergeSort(arr);
     console.log(sortedArr.join(" "));
   }
   
   function mergeSort(arr) {
     if (arr.length <= 1) return arr;
   
     const mid = Math.floor(arr.length / 2);
     const left = mergeSort(arr.slice(0, mid));
     const right = mergeSort(arr.slice(mid));
   
     return merge(left, right);
   }
   
   function merge(left, right) {
     let result = [];
     let i = 0, j = 0;
   
     // Merge in descending order
     while (i < left.length && j < right.length) {
       if (left[i] > right[j]) {
         result.push(left[i]);
         i++;
       } else {
         result.push(right[j]);
         j++;
       }
     }
     while (i < left.length) result.push(left[i++]);
     while (j < right.length) result.push(right[j++]);
   
     return result;
   }
   