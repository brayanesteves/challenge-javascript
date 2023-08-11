function getDecryptor() {
    const characters = "abcdefhijklmnopqrstuvwxyz";
    const map        = [];

    let key          = 0;

    for(const character of characters) {
        map[key] = character;
        key     += 1;
    }
    return map;
}

function analyze(arrayToDecrypt, decryptionMap) {
    let answer = "";
    for(const character in arrayToDecrypt) {
        if(decryptionMap[character]) {
            answer += decryptionMap[character];
        } else {
            answer += " ";
        }
    }
    return answer;
}

console.log(analyze([2, 5, 22, 41, 10], getDecryptor())); // abcde