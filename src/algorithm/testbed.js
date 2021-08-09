/**
 * Check if a given input is a palindrome or not, 
 * an input is an palindrom if the characters from
 * left and right are the same.
 * 
 * @param {palindrome} input 
 * @returns 
 */
function checkIfPalindrome(input) {
    input = input.toLowerCase();
    var i = 0;
    var j = input.length - 1;

    while (j >= i) {
        if (input[i] != input[j])
            return false;
        i++;
        j--;
    }

    return true;
}
/**
 * Removes consequetive spaces in an input.
 * 
 * @param {input} input 
 * @returns 
 */
function removeSpaceRegEx(input) {
    var r = input.trim().replace(/\s+/g, '@');
    return r;
}
function removeConsequetiveSpaces(input) {
    var space = ' ';
    var response = [];
    for (var i = 0; i <= input.length - 1; i++) {
        if (input[i] != space) {
            response.push(input[i]);
        } else {
            if (response[response.length - 1] != space) {
                response.push(space);
            }
        }
    }
    return response.join();
}
/**
 * Check if the given input is a parangram, an input
 * is a panagram if the input contains all characters
 * from a --> z, otherwise the input is not a paragram.
 */
function checkIfPanagram(input) {
    input = input.toLowerCase();
    // a --> 97 , z --> 122 = 25
    var a = new Array(26).fill(0);
    for (let c of input) {
        if (c != ' ') {
            a[c.charCodeAt() - 97] = 1;
        }
    }
    console.log(a);
    for (let i of a) {
        if (i === 0)
            return false;
    }
    return true;
}

function findHighFrequencyChac(input) {
    var hf = new Array(26).fill(0);
    input = input.toLowerCase();

    for (let c of input) {
        if (c.charCodeAt() > 96 && c.charCodeAt() <= 122) {
            if (hf[c.charCodeAt() - 97][0] != undefined) {
                hf[c.charCodeAt() - 97] = [hf[c.charCodeAt() - 97][0] + 1, c];
            } else {
                hf[c.charCodeAt() - 97] = [1, c]
            }
        }
    }
    var hfNew = [];
    for (let h of hf) {
        if (h != 0) {
            hfNew.push(h);
        }
    }

    return hfNew.sort();
}

function rearrange(input) {
    var hf = findHighFrequencyChac(input);
    return String.fromCharCode(97 + MAXINDEX);
}

function nearestWhole(n) {

    let a = parseInt(n / 10) * 10;
    let b = a + 10;
    return (n - a > b - n)? b : a;
}

console.log(checkIfPalindrome('iTopiNonAvevanoNipoti'));
console.log(removeSpaceRegEx('r  u pak'));
console.log(removeConsequetiveSpaces('r  u pak'));
console.log(checkIfPanagram('The quick brown fox jumps over the lazy dog'));
console.log(findHighFrequencyChac('aaabbbcc '));
console.log(nearestWhole(4722));
console.log(nearestWhole(38));