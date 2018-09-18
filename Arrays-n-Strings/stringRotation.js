var isSubstring = (str1, str2) => {
    return str1.includes(str2) || str2.includes(str1);
};

var stringRotation = (s1, s2) => {
    //I: two strings
    //O: true if s2 is rotation of s1, false otherwise
    //C: one call to isSubstring
    //E: ?
    var firstLetter = s1[0];
    var lastLetter = s1[s1.length - 1];
    var offset;

    for (var i = 0; i < s2.length; i++) {
        if (s2[i + 1] !== undefined && s2[i] === lastLetter && s2[i + 1] === firstLetter) {
            offset = i + 1;
        }
    }
    if (offset === undefined && s1[0] !== s2[0] && s1[s1.length - 1] !== s2[s2.length - 1]) {
        return false;
    } else if (s1[0] === s2[0] && s1[s1.length - 1] === s2[s2.length - 1]) {
        offset = 0;
    }

    return isSubstring(s1, s2.slice(offset) + s2.slice(0, offset));
};
