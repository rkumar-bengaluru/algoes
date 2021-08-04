// Print all permutations of a given string
// Algorithm Paradigm: Backtracking 
// Time Complexity: O(n*n!) Note that there are n! 
// Permutations and it requires O(n) time to print a 
// permutation.
var input = ['A', 'B', 'C'];
var output = [];

function swap(input, i, j) {
    let tmp = input[i];
    input[i] = input[j];
    input[j] = tmp;
    return input;
}

function findPermutation(input, start, end) {
    if (start === end) {
        var t = [];
        for(let i of input) {
            t.push(i);
        }
        output.push(t);
        return;
    }
    for (var i = start; i <= end; i++) {
        input = swap(input, start, i);
        findPermutation(input, start + 1, end);
        input = swap(input, start, i);
    }
}
console.log('input - ');
console.log(input);
findPermutation(input, 0, input.length - 1);
console.log('output - ');
console.log(output);