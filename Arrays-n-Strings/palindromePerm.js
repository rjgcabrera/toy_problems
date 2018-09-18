var palindromePerm = (str) => {
    // see if you can rearrange the chars of the string to create a palindrome
    var charObj = {};
    for (var i = 0; i < str.length; i++) {
        if (charObj[str[i]] === undefined) {
            charObj[str[i]] = 1;
        } else {
            charObj[str[i]] += 1;
        }
    }
    var evenChars = 0;
    var oddChars = 0;
    for (var key in charObj) {
        if (charObj[key] % 2 === 0) {
            evenChars += 1;
        } else {
            oddChars += 1;
        }
    }
    return oddChars <= 1;
};
