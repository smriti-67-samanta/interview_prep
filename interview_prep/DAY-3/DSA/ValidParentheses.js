function validParentheses(s){
     let stack=[]
    let pair={
        '(':')',
        '{':'}',
        '[':']'
    }
    for(let char of s){
        if(char in pair){
            stack.push(char)
        }
        else{
            let last=stack.pop()
            if(pair[last] !== char){
                return false
            }
        }
    }
    return stack.length==0
}

console.log(validParentheses('()'));        // true
console.log(validParentheses('()[]{}')); // true
console.log(validParentheses('(]'));        // false
console.log(validParentheses('([)]'));      // false
console.log(validParentheses('{[]}'));      // true