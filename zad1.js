function hasTwoCubeSums(n) {
    let sums = new Map();
    
    for (let a = 1; a * a * a < n; a++) {
        for (let b = a + 1; a * a * a + b * b * b <= n; b++) {
            let sum = a * a * a + b * b * b;
            if (sum === n) {
                if (sums.has(sum)) {
                    return true;
                }
                sums.set(sum, [a, b]);
            }
        }
    }
    return false;
}

console.log(hasTwoCubeSums(1729)); 
console.log(hasTwoCubeSums(42));   
