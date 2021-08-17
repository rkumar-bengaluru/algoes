/**
 * Write a function
 *
 * that, given an array A consisting of N integers, returns the number of 
 * distinct values in array A. For example, given array A consisting of 
 * six elements such that:
 *
 * A[0] = 2    A[1] = 1    A[2] = 1
 * A[3] = 2    A[4] = 3    A[5] = 1
 * 
 * the function should return 3, because there are 3 distinct values 
 * appearing in array A, namely 1, 2 and 3.
 *
 * Write an efficient algorithm for the following assumptions:
 *
 */
 function solution(A) {
    if (A.length === 0) {
        return 0;
    }
    var map = new Map();
    for (let c of A) {
        if (!map.get(c)) {
            map.set(c, 1);
        } else {
            map.set(c, map.get(c) + 1);
        }
    }
    var keys = map.keys();
    console.log(map.size);
    return map.size;
}

console.log(solution(generate_randon(20)));

function generate_randon(size) {
    var a = new Array(size).fill(0);
    console.log(a);
    for (var i = 0; i < size; i++) {
        a[i] = Math.floor(Math.random() * 101);
    }
    console.log(a);
    return a;
}