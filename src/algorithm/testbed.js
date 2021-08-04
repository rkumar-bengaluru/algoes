var input = ['3', '6', '8','2'];
var output = [];
var plus = [];
var minus = [];
var star = [];
var r = 24;

function checkIfValid(a,b,r) {
  	console.log('f-'+ a + ',s-' + b);
  	f = parseInt(a);
  	s = parseInt(b);
  	plus.push((f+s));
  	minus.push((f-s));
  	star.push((f*s));
  	if( ((f+s) === r)) {
  		return true;
    } else if( ((f-s) === r)) {
  		return true;
    } else if( ((f*s) === r)) {
  		return true;
    }
    return false;
}

function findDynamic(input) {
  	var f = input[0];
  	var s = input[1];
  	if(checkIfValid(f,s,r)) {
    	return true;
    }
  	console.log(plus);
  	console.log(minus);
 	 console.log(star);
  	for(var i = 2;i < input.length;i++) {
      	if(checkIfValid(plus[i-1],input[i])) {
        	return true;
        }
      	if(checkIfValid(minus[i-1],input[i])) {
        	return true;
        }
      	if(checkIfValid(star[i-1],input[i])) {
        	return true;
        }
    }
  	return false;
}
console.log(findDynamic(input));
function permutation(input, start, end) {
  	if(start === end) {
    	let tmp = [];
      	for(let c of input) {
        	tmp.push(c);
        }
      	output.push(tmp);
      	
      	return;
    }
  	for(var i = start; i <= end;i++) {
    	swap(input,i,start);
      	permutation(input, start + 1, end);
      	// backtrack
      	swap(input,i,start);
    }
}

function swap(input, i, j) {
  	let tmp = input[i];
  	input[i] = input[j];
  	input[j] = tmp;
}
// driver code
permutation(input, 0, input.length -1);
console.log(JSON.stringify(output));
console.log(output.length);

