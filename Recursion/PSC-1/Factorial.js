function factorial(n){
    if(n==0){
        return 1
    }
    else{
        return n *factorial(n-1)
    }
}

let n =3;

console.log(factorial(n))