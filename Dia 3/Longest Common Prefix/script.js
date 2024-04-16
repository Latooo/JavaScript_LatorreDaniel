

strs = ["flower","flow","flight"]

var longestCommonPrefix = function(strs) {
    if (strs.length === 0) return "";
    let str = strs[0];
    for (let prefix of strs) {
        while (prefix.indexOf(str) !== 0) {
            str = str.substring(0, str.length - 1);
        }
    }
    return str;
};