function multiplyAll(arr) {
    return function(num) {
        return arr.map((value) => value * num);
    }
}

console.log(multiplyAll([2, 4, 8])(2));
