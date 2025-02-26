function findMissing(list) {
    let n = list.length;
    let diff = (list[n - 1] - list[0]) / n;
    for (let i = 0; i < n - 1; i++) {
        if (list[i] + diff !== list[i + 1]) return list[i] + diff;
    }
}

console.log(findMissing([1, 3, 5, 9, 11]));
