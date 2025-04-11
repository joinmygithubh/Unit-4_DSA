function runProgram(input) {
    input = input.trim().split("\n")
    let T = +input[0]
    let line =1
    
    for(let i=0; i<T ; i++){
      let [a,b] = input[line++].trim().split(" ").map(Number)
      console.log(implementGCD(a,b))
    }
  }
  function implementGCD(a,b){
    if(a==0){
      return b
    }
    else{
      return implementGCD(b%a, a)
    }
  }
  