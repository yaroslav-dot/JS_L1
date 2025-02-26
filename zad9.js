function solution(str) {
    let result = [];
    for (let i = 0; i < str.length; i += 2) {
        result.push(str[i+1] ? str[i] + str[i+1] : str[i] + '_');
    }
    return result;
}

console.log(solution('abc')); 
console.log(solution('abcdef')); 
