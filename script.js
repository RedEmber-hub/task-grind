function classAverage(array) {
    return function(number) {
        return number > [...array, number].reduce((a, b) => a + b) / [...array, number].length
    }
}

console.log(classAverage([48, 56, 62, 65, 70, 76, 78, 80, 86]) (72));
