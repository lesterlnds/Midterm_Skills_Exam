function sumDeepStrictNumbers(arr) {
    let sum = 0;
    for (let x of arr) {
        if (Array.isArray(x)) sum += sumDeepStrictNumbers(x);
        else if (typeof x === "number" && !isNaN(x)) sum += x;
    }
    return sum;
}

// Test Code
const testArray1 = [10, ['5', [true, 5]], null, [undefined, [10, NaN]]];
console.log(sumDeepStrictNumbers(testArray1));
