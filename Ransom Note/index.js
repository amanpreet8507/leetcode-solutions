/* Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.

Each letter in magazine can only be used once in ransomNote.

Example 1:
Input: ransomNote = "a", magazine = "b"
Output: false

Example 2:
Input: ransomNote = "aa", magazine = "ab"
Output: false

Example 3:
Input: ransomNote = "aa", magazine = "aab"
Output: true
 
Constraints:
1 <= ransomNote.length, magazine.length <= 105
ransomNote and magazine consist of lowercase English letters.
*/
var canConstruct = function (ransomNote, magazine) {
  console.log("*************************************************");
  let isConstruct = true;
  if (ransomNote.length > magazine.length) {
    isConstruct = false;
  }

  let magazineChar = magazine.split("");
  console.log("split magazineChar", magazineChar);
  for (let eachChar of ransomNote) {
    let index = magazineChar.indexOf(eachChar);
    console.log("index", index);
    if (index === -1) {
      isConstruct = false;
    } else {
      magazineChar.splice(index, 1);
    }
  }
  console.log("magazineChar", magazineChar);
  return isConstruct;
};

console.log(canConstruct("a", "b"));
console.log(canConstruct("aa", "ab"));
console.log(canConstruct("ab", "aab"));
