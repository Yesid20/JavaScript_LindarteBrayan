/**
 
@param {string[]} strs
@return {string}
*/
var longestCommonPrefix = function(strs) {
    let longest_pre= []

    if (strs && strs.length > 0){
        strs = strs.sort();
        let first = strs[0], last = strs[strs.length - 1];
        for (let i = 0; i < first.length; i++) {
            if (last.length >i && last[i] === first[i]){
                longest_pre.push(last[i]);
            } else {
                return longest_pre.join("");
            }
        }
    }
    return longest_pre.join("");
};