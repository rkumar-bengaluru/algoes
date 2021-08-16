var A = [3, 4, -1, 0, -2, 2, 1, 7, -8];
var a = [-2, -3];
var b = [5, 4, 3, 2, 1]

console.log(A);
var j = movenegative(A, 0, A.length - 1);
console.log(j);
console.log(findLeastPositive(j));


function findLeastPositive(arr) {
    var size = arr.length - 1;
    
    for (var i = 0; i <= size - 1; i++) {
        let x = arr[i];
        if (x - 1 < size && arr[x - 1] > 0) {
            arr[x - 1] = -arr[x - 1];
        }
    }
    console.log(arr);
    for (i = 0; i < size; i++) {
        if (arr[i] > 0)
            return i + 1;
    }
    return size + 1;
}

function movenegative(A, l, r) {
    var res = [];
    for (var i = l; i <= r; i++) {
        if (A[i] > 0) {
            res.push(A[i]);
        }
    }
    return res;
}

function solution(A) {
    sort(A, 0, A.length - 1);
    console.log(A);
    var prev = A[0];
    for (var i = 1; i <= A.length; i++) {
        if (A[i] - prev > 1) {
            return prev + 1;
        } else {
            prev = A[i];
        }
    }
    var r = A[A.length - 1] + 1;
    if (r <= 0) {
        return 1;
    }
    return r;
}

function merge(A, l, m, r) {
    var i = l;
    var j = m + 1;
    while (i <= m && j <= r) {
        if (A[i] > A[j]) {
            swap(A, i, j);
            i++; j++;
            for (var k = j; k <= r; k++) {
                if (A[k - 1] > A[k]) {
                    swap(A, k - 1, k);
                }
            }
            j = m + 1;
        } else {
            i++;
        }
    }
    console.log('l-' + l + ',m-' + m + ',r-' + r);
    console.log(A);
}
function sort(A, l, r) {
    if (l < r) {
        var m = l + Math.floor((r - l) / 2);
        sort(A, l, m);
        sort(A, m + 1, r);
        merge(A, l, m, r);
    }
}
function swap(A, i, j) {
    var t = A[i];
    A[i] = A[j];
    A[j] = t;
}
