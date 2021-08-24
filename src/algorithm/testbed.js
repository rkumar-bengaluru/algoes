/**
 * Given a value amount, if we want to make change for amount,
 * and we have infinite supply of each of Denominations = 
 * { D1, D2, .. , Dm} valued coins, how many ways can we 
 * make the change?
 * 
 * @param {*} denominations 
 * @param {*} amount 
 * @returns 
 */
var solveCoinChange = function (denominations, amount) {
    var table = new Array(amount + 1).fill(0);
    var r = [];
    table[0] = 1;
    for (var i = 0; i <= denominations.length - 1; i++) {
        for (var j = denominations[i]; j <= amount; j++) {
            table[j] = table[j] + table[j - denominations[i]];
            r.push(table);
        }
    }
    return table[amount];
}
let denominations = [1, 2, 5];
let amount = 7;
let result = solveCoinChange(denominations, amount)
console.log("solveCoinChange([" + String(denominations) +
    '], ' + String(amount) + ') = ' + result);