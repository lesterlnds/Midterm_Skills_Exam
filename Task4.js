const memo = {};

function power(base, exp) {
    let key = base + "," + exp;
    if (memo[key]) return memo[key];

    if (exp === 0) return 1;
    if (exp < 0) return memo[key] = 1 / power(base, -exp);

    return memo[key] = base * power(base, exp - 1);
}

// Test Code
console.log(power(2, 5));
console.log(power(2, -2));