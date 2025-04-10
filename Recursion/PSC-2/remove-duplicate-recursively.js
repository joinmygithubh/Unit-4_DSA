function runProgram(input) {
    input = input.trim().split('\n');
    const T = +input[0];

    for (let i = 1; i <= T; i++) {
        let s = input[i].trim();
        const result = removeDuplicates(s);
        console.log(result === '' ? "Empty String" : result);
    }
}

function removeDuplicates(s) {
    let stack = [];

    for (let i = 0; i < s.length; i++) {
        if (stack.length && stack[stack.length - 1] === s[i]) {
            stack.pop();
            // Skip the current one, and continue
            while (i + 1 < s.length && s[i] === s[i + 1]) {
                i++;
            }
        } else {
            stack.push(s[i]);
        }
    }

    const newStr = stack.join('');
    // If changes were made, repeat recursively
    return newStr === s ? newStr : removeDuplicates(newStr);
}
