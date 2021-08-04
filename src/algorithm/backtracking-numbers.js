var input = [3, 6, 8, 2];
var result = 24;
var response = [];
// operator = (+) (-) (*) (/)

function isResultPossible2(one, two, result) {
    if (((one + two) === result)) {
        response.push(' + (' + two + '))');
        return true;
    } else if (((one - two) === result)) {
        response.push(' - (' + two + '))');
        return true;
    } else if (((one * two) === result)) {
        response.push(' * (' + two + '))');
        return true;
    } else if (((one / two) === result)) {
        response.push(' / (' + two + '))');
        return true;
    } else {
        return false;
    }

}
function isResultPossible3(one, two, three, result) {
    if ((isResultPossible2(one + two, three, result))) {
        response.push(' + ' + two + ' ))');
        return true;
    } else if ((isResultPossible2(one - two, three, result))) {
        response.push(' - ' + two + ' ))');
        return true;
    } else if ((isResultPossible2(one * two, three, result))) {
        response.push(' * ' + two + ' ))');
        return true;
    } else if ((isResultPossible2(one / two, three, result))) {
        response.push(' / ' + two + ' ))');
        return true;
    } else if ((isResultPossible2(one, two + three, result))) {
        response.push(' + ' + two + ' ))');
        return true;
    } else if ((isResultPossible2(one, two - three, result))) {
        response.push(' + ' + two + ' ))');
        return true;
    } else if ((isResultPossible2(one, two * three, result))) {
        response.push(' * ' + two + ' ))');
        return true;
    } else if ((isResultPossible2(one, two / three, result))) {
        response.push(' / ' + two + ' ))');
        return true;
    } else if ((isResultPossible2(one + three, two, result))) {
        response.push(' + ' + two + ' ))');
        return true;
    } else if ((isResultPossible2(one - three, two, result))) {
        response.push(' - ' + two + ' ))');
        return true;
    } else if ((isResultPossible2(one * three, two, result))) {
        response.push(' * ' + two + ' ))');
        return true;
    } else if ((isResultPossible2(one / three, two, result))) {
        response.push(' / ' + two + ' ))');
        return true;
    }

    return false;
}
function isPossible() {
    // check with all operators between first 2 numbers.
    var size = input.length;
    if ((isResultPossible3(input[0] + input[1],
        input[2], input[3], result))) {
        response.push(' (((' + input[0] + ' + ' + input[1] + ')');
        return true;
    } else if ((isResultPossible3(input[0] - input[1],
        input[2], input[3], result))) {
        response.push(' (((' + input[0] + ' - ' + input[1] + ')');
        return true;
    } else if ((isResultPossible3(input[0] * input[1],
        input[2], input[3], result))) {
        response.push(' (((' + input[0] + ' * ' + input[1] + ')');
        return true;
    } else if ((isResultPossible3(input[0] / input[1],
        input[2], input[3], result))) {
        response.push(' (((' + input[0] + ' / ' + input[1] + ')');
        return true;
    }// next 2 & 3
    else if ((isResultPossible3(input[0], input[1] +
        input[2], input[3], result))) {
        response.push(' (((' + input[0] + ' * ' + input[1] + ')');
        return true;
    } else if ((isResultPossible3(input[0], input[1] -
        input[2], input[3], result))) {
        response.push(' (((' + input[0] + ' - ' + input[1] + ')');
        return true;
    } else if ((isResultPossible3(input[0], input[1] *
        input[2], input[3], result))) {
        response.push(' (((' + input[0] + ' * ' + input[1] + ')');
        return true;
    } else if ((isResultPossible3(input[0], input[1] /
        input[2], input[3], result))) {
        response.push(' (((' + input[0] + ' / ' + input[1] + ')');
        return true;
    } // next 3 & 4 
    else if ((isResultPossible3(input[0], input[1],
        input[2] + input[3], result))) {
        response.push(' (((' + input[0] + ' + ' + input[1] + ')');
        return true;
    } else if ((isResultPossible3(input[0], input[1],
        input[2] - input[3], result))) {
        response.push(' (((' + input[0] + ' - ' + input[1] + ')');
        return true;
    } else if ((isResultPossible3(input[0], input[1],
        input[2] * input[3], result))) {
        response.push(' (((' + input[0] + ' * ' + input[1] + ')');
        return true;
    } else if ((isResultPossible3(input[0], input[1],
        input[2] / input[3], result))) {
        response.push(' (((' + input[0] + ' / ' + input[1] + ')');
        return true;
    }
    return false;
}

console.log('input --> ' + input + ', expected result -->' + 24);
console.log('isPossible --> ' + isPossible());
console.log('output --> ' + response[2] + response[1] + response[0]);