function powerFunction (a,b){
    if(b==0){
        return 1
    }
    else{
        return a * powerFunction(a, b-1)
    }
}
let a = 2
let b = 4
console.log(powerFunction(a,b))