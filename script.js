function removeElement(string) {
    if (string == "") {
        return "";
    } else {
        return string.split("").filter((num) => !('0' <= num && num <= '9')).join("");
    }
}

console.log(removeElement("Дву1111значны234е и мног34означн32ые ч543исла") );
