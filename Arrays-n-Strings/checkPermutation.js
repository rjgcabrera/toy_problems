// Naive

var checkPermutationNaive = (str1, str2) => {
    var str1Arr = str1.split('').sort();
    var str2Arr = str2.split('').sort();
    return JSON.stringify(str1Arr) === JSON.stringify(str2Arr);
};

// O(n + m) time and space
var checkPermutation = (str1, str2) => {
    var charObj1 = {};
    for (var i = 0; i < str1.length; i++) {
        if (charObj1[str1[i]] === undefined) {
            charObj1[str1[i]] = 1;
        } else {
            charObj1[str1[i]] += 1;
        }
    }
    var charObj2 = {};
    for (var j = 0; j < str1.length; j++) {
        if (charObj2[str1[j]] === undefined) {
            charObj2[str1[j]] = 1;
        } else {
            charObj2[str1[j]] += 1;
        }
    }
    for (var key in charObj1) {
        if (charObj2[key] === undefined) {
            return false;
        } else if (charObj1[key] !== charObj2[key]) {
            return false;
        }
    }
    return true;
};
