/**
 * Find if a given number is a prime number.
 * 
 * A number is a prime number when it is only
 * divided by 1 or itself.
 * 
 * @param {numberToCheck} n 
 * @returns 
 */
function isPrime(n) {
    if (n <= 0) {
        return false;   
    } else if (n === 1) {
        return true;
    }
    for (var i = 2; i < n; i++) {
        var r = n % i;
        if (r === 0) {
            return false;
        }
    }
    return true;
}
/**
 * Find all prime number less than or equal to the
 * given number.
 * 
 * @param {NumberToCheck} n 
 * @returns 
 */
function isPrimeRecursive(n) {
    var primes = [];
    while (n >= 1) {
        if (isPrime(n)) {
            primes.push(n);
        }
        n--;
    }
    return primes;
}
/**
 * Find the prime factor of a given number.
 * 
 * Prime Factors are the prime number which when
 * multiplied outputs the given number.
 * 
 * @param {NumberToCheck} n 
 * @returns 
 */
function primeFactor(n) {
    var factors = [];
    for (var i = 2; i < n; i++) {
        while (n % i === 0) {
            n = Math.floor(n / i);
            factors.push(i);
        }
    }
    if (n > 1) {
        factors.push(n);
    }
    return factors;
}
/**
 * check if input array contains only those numbers
 * that are in array b.
 * 
 * @param {*} a 
 * @param {*} b 
 */
function checkIfArrayDirty(a, b) {
    var d = [];
    d.push(0);
    for (var i = 0; i < a.length; i++) {
        var isP = false;
        for (let c of b) {
            if (a[i] === c) {
                isP = true;
                // matched and hence break the inner loop.
                break;
            }
        }
        if (isP) {
            d.push(d[0] + 0);
        } else {
            d.push(d[0] + 1);
        }
    }
    
    return d;
}
// a number is ugly if its prime factors are 2,3,5
/**
 * Find if a given number is an Ugly Number.
 * 
 * A number is ugly when its prime factors are 2,3,5
 * @param {Number} n 
 * @returns 
 */
function findIfUglyNumber(n) {
    var primeFactors = [2, 3, 5];
    var pfs = primeFactor(n);
    
    // if any of the prime factor is not a prime 
    // then it an ugly number
    var res = checkIfArrayDirty(pfs,primeFactors);
    if(res[res.length -1] === 0) {
        return true;
    } else {
        return false;
    }
}
/**
 * Find All Ugly Numers less than or equal to
 * the given number.
 * 
 * @param {Number} n 
 * @returns 
 */
function checkUglyRecursive(n) {
    var ugly = [];
    while (n >= 1) {
        if (findIfUglyNumber(n)) {
            ugly.push(n);
        }
        n--;
    }
    return ugly;
}

// Drivers for each function.
console.log('All Prime Numbers Less Than 20 :-');
console.log(isPrimeRecursive(20));
console.log('Prime Factors of 315 :-');
console.log(primeFactor(315));
console.log('All Ugly Numbers Less Than 15 :-');
console.log(checkUglyRecursive(15));
console.log('Check If input array a & b contains same numbers :-');
console.log(checkIfArrayDirty([3,3,5],[2,3,5]));