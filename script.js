function getInitials(string) {
    return string.split(" ").map((word) => word[0].toUpperCase()).join(".");
}

console.log(getInitials("Dinara Savrandeeva"));