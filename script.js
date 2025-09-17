function add(n) {
    return function(value) {
        return value + n;
    }
}

console.log(add(5)(5));
