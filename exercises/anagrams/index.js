// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
  return sanitize(stringA) === sanitize(stringB);
}

function sanitize(str) {
  return str.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('');
}

module.exports = anagrams;

// Solution 1:
// function(stringA, stringB) {
  // stringA = stringA.replace(/[^\w]/g, '').toLowerCase();
  // stringB = stringB.replace(/[^\w]/g,'').toLowerCase();
  // let charsA = {};
  // let charsB = {};
  // for (let char of stringA) {
  //   charsA[char] = charsA[char] + 1 || 1;
  // }
  // for (let char of stringB) {
  //   charsB[char] = charsB[char] + 1 || 1;
  // }
  // if (stringA.length !== stringB.length) {
  //   return false;
  // } else {
  //   for (let char in charsA) {
  //     if (charsA[char] !== charsB[char]) {
  //       return false;
  //     }
  //   }
  // }
  // return true;
// }

// Solution 2:
// function(stringA, stringB) {
//   let charMapA = buildCharMap(stringA);
//   let charMapB = buildCharMap(stringB);
//
//   if (Object.keys(charMapA).length !== Object.keys(charMapB).length) {
//     return false;
//   }
//   for (let char in charMapA) {
//     if (charMapA[char] !== charMapB[char]) {
//       return false;
//     }
//   }
//   return true;
//   }
// }
//
//
// function buildCharMap(str) {
//   let charMap = {};
//   for (let char of str.replace(/[^\w]/g, '').toLowerCase()) {
//     charMap[char] = charMap[char] + 1 || 1;
//   }
//   return charMap;
// }
