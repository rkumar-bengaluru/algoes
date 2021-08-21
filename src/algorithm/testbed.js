/**
 * How many ways can you make change with coins and a total amount.
 * var Denomination = [1,2,5]
 * var Change = 7;
 */

var bills = [1, 2, 3];
var change = 4;
var ways = 0;
var r = [];

function count(A, T, n) {
    if (T === 0) {
        return 1;
    }

    if (n < 0 || T < 0) {
        return 0;
    }
    var include = count(A, T - A[n], n);
    var exclude = count(A, T, n - 1);
    console.log(include + ',' + exclude);
    return include + exclude;

}
var ways = count(bills, change, bills.length - 1);
console.log(r);