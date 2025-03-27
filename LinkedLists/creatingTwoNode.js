// Creating Two Nodes

let firstNode = {
    value : 10,
    next : null
}

let head = firstNode

let secondNode = {
    value :20,
    next : null
}

firstNode.next = secondNode

console.log(firstNode.next)   // {value : 20, next : null}
console.log(firstNode.next.value) // 20