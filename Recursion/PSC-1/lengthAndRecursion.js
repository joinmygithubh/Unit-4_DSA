//Find the length of the string using Recursion

function lengthAndRecursion(str){
    if(str ==''){
        return 0
    }
    else{
        return 1 + lengthAndRecursion(str.slice(1))
    }
}

let str = "masaischool"

console.log(lengthAndRecursion(str))