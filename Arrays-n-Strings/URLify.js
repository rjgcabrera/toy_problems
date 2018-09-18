var urlify = (str, len) => {
    var output = '';
    for (var i = 0; i < str.length; i++) {
        if (str[i] === ' ') {
            output += '%20';
        } else if (i >= len) {
            break;
        } else {
            output += str[i];
        }
    }
    if (len > str.length) {
        for (var j = str.length - 1; j < len; j++) {
            output += '%20';
        }
    }
    return output;
};
