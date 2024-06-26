// Q-3 : Valid Anagram
// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, using all the original letters exactly once.

// I/P: (s = "anagram"), (t = "nagaram");   ----------->>>>>>> O/P: TRUE;
// I/P: (s = "rat"), (t = "car");   ----------->>>>>>> O/P: FALSE;

// 1st Approach
const isAnagram = function(s,t){
    s = s.split("").sort().join("");
    t = t.split("").sort().join("");

    return s === t;
}

// anagram => [a,n,a,g,r,a,m] => [a,a,a,m,n,r] => aaamnr
// nagaram => [n,a,g,a,r,a,m] => [a,a,a,m,n,r] => aaamnr

// 2nd Approach

const isAnagram1 = function (s, t) {
  if (s.length !== t.length) return false;

  let obj1 = {};
  let obj2 = {};

  for (let i = 0; i < s.length; i++) {
    obj1[s[i]] = (obj1[s[i]] || 0) + 1;
    obj2[t[i]] = (obj2[t[i]] || 0) + 1;
  }

  for (const key in obj1) {
    if (obj1[key] !== obj2[key]) return false;
  }

  return true;
};

console.log(isAnagram1("anagram", "nagarm"));

// rat / tar

// {
//     r: 1,
//     a: 1,
//     t:1
// }

// {
//     t: 1,
//     a: 1,
//     r:1
// }
