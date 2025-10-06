<<<<<<< HEAD
function removeElement(string) {
    if (string == "") {
        return "";
    } else {
        return string.split("").filter((num) => !('0' <= num && num <= '9')).join("");
    }
}

console.log(removeElement("Дву1111значны234е и мног34означн32ые ч543исла") );
=======
function sumNumbersInString(str) {
     return (str.match(/\d+/g) || [])
    .map(Number)
    .reduce((acc, num) => acc + num, 0);
}

console.log(sumNumbersInString("The30quick20brown10f0x1203jumps914ov3r1349the102l4zy dog"));
>>>>>>> 92396ed4a0016c16a6b5042311cf1547f11146a3
