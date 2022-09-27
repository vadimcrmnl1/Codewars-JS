const sort = (word) => word.split('').sort().join('');

function anagrams(word, words) {
    let token = sort(word);

    return words.filter((w) => sort(w) === token);
}

console.log(anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']));