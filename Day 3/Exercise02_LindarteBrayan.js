/**
 
@param {string[]} dictionary
@param {string} sentence
@return {string}
*/
var replaceWords = function(dictionary, sentence) {
    let rootSet = new Set(dictionary);
   let words = sentence.split(' ');

   for (let i = 0; i < words.length; i++) {
       for (let root of rootSet) {
           if (words[i].startsWith(root)) {
               words[i] = root;
               break;
           }
       }
   }

   return words.join(' ');
};