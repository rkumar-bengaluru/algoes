/**
 * A non-empty array A consisting of N integers is given. 
 * The consecutive elements of array A represent consecutive 
 * cars on a road.
 * The goal is to count passing cars. We say that a pair of 
 * cars (P, Q), where 0 ≤ P < Q < N, is passing when P is 
 * traveling to the east and Q is traveling to the west.
 * For example, consider array A such that:
 *
 * A[0] = 0
 * A[1] = 1
 * A[2] = 0
 * A[3] = 1
 * A[4] = 1
 * We have five pairs of passing cars: (0, 1), (0, 3), (0, 4), (2, 3), (2, 4).
 */

var A = [0, 1, 0, 1, 1];
console.log(A[0].toFixed(0));
function findPassingCars(A) {
    var counter = 0;
    var factor = 1;
    var dir = A[0].toFixed(0);
    for (var i = 1; i <= A.length - 1; i++) {
        if (A[i].toFixed(0) === dir) {
            factor = factor + 1;
        } else {
            counter = counter + factor * 1;
        }
    }
    if (counter > 1000000000) {
        return -1;
    }
    return counter;
}