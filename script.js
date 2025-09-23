function classAverage(points, number) {
    let sum = [...points, number];
    return number > sum.reduce((a, b) => a + b) / sum.length
}

console.log(classAverage([48, 56, 62, 65, 70, 76, 78, 80, 86], 72));
