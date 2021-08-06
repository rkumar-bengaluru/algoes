var pf = [2, 3, 5];
var r = [];

function checkIfPrime(n) {
    if (n <= 1) {
        return false;
    }
    for (let i = 2; i < n; i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}

function checkRecursivePrime(n) {

    while (n > 1) {
        if (checkIfPrime(n)) {
            r.push(n);
        }
        n--;
    }
    r.push(1);
}
function primefactors(n) {
    var res = [];
    if (n <= 1) {
        return;
    }

    for (var i = 2; i <= n; i++) {
        while (n % i === 0) {
            res.push(i);
            n = Math.floor(n / i);
        }
    }
    console.log(res);
    return res;
}

function checkIfArrayContains(input, expected) {
    for (let i of input) {
        var fairPointer = 0;
        for (var fairPointer = 0; i < expected.length;i++) {
            console.log(i  + ', expected ' + expected[fairPointer]);
           if(i === expected[fairPointer]) {
                return true;
           }
        }
    }
    return false;
}

function isUgly(n) {
    var pfs = primefactors(n);
    var exp = [2,3,5];
    if(!checkIfArrayContains(pfs,exp)) {
        console.log('Not an Ugly Number - ' + n);
        return false;
    } else {
        console.log(' Ugly Number -' + n);
        return true;
    }
}

function findUgly(n) {
    var result = [];
    result[0] = 1;
    result[1] = 2;

    for (var i = 2; i <= n; i++) { 
        result[3] = result[i-1] + result[i-2];
    }
    console.log(result);
}

console.log(findUgly(15));
console.log(r);