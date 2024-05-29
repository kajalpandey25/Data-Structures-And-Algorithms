function firstNonRepeatingChar(str) {
    for (let i = 0; i < str.length; i++) {
        if (str.indexOf(str[i]) === str.lastIndexOf(str[i])) {
            return str[i];
        }
    }
    return null;
}
console.log(firstNonRepeatingChar('swiss')); // Output: 'w'
