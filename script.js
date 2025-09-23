function classAverage(points, number) {
    const rating = [...points, number];

    return number > rating.reduce((a, b) => a + b) / rating.length
}

console.log(classAverage([48, 56, 62, 65, 70, 76, 78, 80, 86], 72));
