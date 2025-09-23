function sumNumbersInString(str) {
     return (str.match(/\d+/g) || [])
    .map(Number)
    .reduce((acc, num) => acc + num, 0);
}

console.log(sumNumbersInString("The30quick20brown10f0x1203jumps914ov3r1349the102l4zy dog"));
