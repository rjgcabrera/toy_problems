var isUnique = (str) => {
    var charObj = {};
    for (var i = 0; i < str.length; i++) {
        if (charObj[str[i]]) {
            return false;
        }
        charObj[str[i]] = true;
    }
    return true;
};
