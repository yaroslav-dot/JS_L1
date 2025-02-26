function bingo(ticket, win) {
    let miniWins = 0;

    for (let i = 0; i < ticket.length; i++) {
        const [str, num] = ticket[i];
        for (let char of str) {
            if (char.charCodeAt(0) === num) {
                miniWins++;
                break;
            }
        }
    }

    return miniWins >= win ? 'Winner!' : 'Loser!';
}

console.log(bingo([['ABC', 65], ['HGR', 74], ['BYHT', 74]], 2)); 
console.log(bingo([['ABC', 65], ['HGR', 74], ['BYHT', 74]], 3)); 
