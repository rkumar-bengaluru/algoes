var input = ['3', '6', '8', '2'];
var output = [];
var d = [];
var r = 53;
var res = '';

function checkIfValid(a, b, r) {
    
    f = parseInt(a);
    s = parseInt(b);
    d.push((f + s));
    d.push((f - s));
    d.push((f * s));
    if (((f + s) === r)) {
        console.log('f-' + a + ',s-' + b);
        res += 'f-' + a + ',s-' + b;
        return true;
    } else if (((f - s) === r)) {
        console.log('f-' + a + ',s-' + b);
        res += 'f-' + a + ',s-' + b;
        return true;
    } else if (((f * s) === r)) {
        console.log('f-' + a + ',s-' + b);
        res += 'f-' + a + ',s-' + b;
        return true;
    }
    return false;
}

function findDynamic(input) {
    var f = input[0];
    var s = input[1];
    if (checkIfValid(f, s, r)) {
        return true;
    }
    console.log(d);
    for (var i = 2; i < input.length; i++) {
        for(let k of d) {
            if (checkIfValid(k, input[i], r)) {
                //console.log(d);
                res += 'k-' + k + ',s-' + input[i];
                return true;
            }
        }
        
    }
    return false;
}
console.log(findDynamic(input));
console.log(res);
function permutation(input, start, end) {
    if (start === end) {
        let tmp = [];
        for (let c of input) {
            tmp.push(c);
        }
        output.push(tmp);

        return;
    }
    for (var i = start; i <= end; i++) {
        swap(input, i, start);
        permutation(input, start + 1, end);
        // backtrack
        swap(input, i, start);
    }
}

function swap(input, i, j) {
    let tmp = input[i];
    input[i] = input[j];
    input[j] = tmp;
}
// driver code
// permutation(input, 0, input.length - 1);
// console.log(JSON.stringify(output));
// console.log(output.length);

