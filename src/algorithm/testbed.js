/**
 * Given a string, a partitioning of the string is a palindrome 
 * partitioning if every substring of the partition is a 
 * palindrome. For example, “aba|b|bbabb|a|b|aba” is a palindrome 
 * partitioning of “ababbbabbababa”. Determine the fewest cuts 
 * needed for a palindrome partitioning of a given string. 
 * For example, minimum of 3 cuts are needed for “ababbbabbababa”. 
 * The three cuts are “a|babbbab|b|ababa”. If a string is a 
 * palindrome, then minimum 0 cuts are needed. If a string of 
 * length n containing all different characters, 
 * then minimum n-1 cuts are needed. 
 */
var A = "ababbbabbababa";
console.log(minPalPartion(A));
function minPalPartion(A) {
    var chars = [...A];
    //console.log(chars);
    var start = 0;
    var end = A.length - 1;
    var count = 0;
    while (end > start) {
        var l = findLongestMatchingPalindrome(A, start, end);
        if (l > 0) {
            //console.log(A.substring(l, end + 1));
            start = 0;
            end = l - 1;
            count++;
        } else {
            start = start + 1;
        }
    }
    return count;
}

function findLongestMatchingPalindrome(A, l, r) {
    if (l < r) {
        var i = l;
        var j = r;
        while (i < j) {
            if (A[i] != A[j]) {
                //console.log(i + ':-' + j + ':' + A[i] + ':' + A[j]);
                return findLongestMatchingPalindrome(A, l + 1, r);
            } else {
                //console.log(i + ':' + j + ':' + A[i] + ':' + A[j]);
                i++; j--;
            }
        }
        return l;
    }
}