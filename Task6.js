function firstUniqueChar(str) {
    let count = {};

    for (let c of str.toLowerCase())
        count[c] = (count[c] || 0) + 1;

    for (let c of str)
        if (count[c.toLowerCase()] === 1) return c;
}

// Test Code
console.log(firstUniqueChar('sTreSS'));
console.log(firstUniqueChar('aabbc')); 
