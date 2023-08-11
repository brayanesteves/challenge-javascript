function isPalindrome(word) {
    let i = 0;
    while(i < word.length / 2) {
        if(word[i] != word[word.length - i -1]) {
            return false;
        }
        i += 1;
    }
    return true;
}

console.log(isPalindrome("un"));  // false
console.log(isPalindrome("aba")); // true
console.log(isPalindrome("aaa")); // true
console.log(isPalindrome("ac"));  // false