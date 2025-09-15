function calculatePoints(matches) {
 return matches.reduce((points, match) => {
    const [x, y] = match.split(":").map(Number);
    
    if (x > y) return points + 3;      
    if (x === y) return points + 1;    
    return points;                       
 }, 0)
}

console.log(calculatePoints(["3:1", "2:2", "0:1"]));