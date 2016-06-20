function myEvery(arr,callback) {
	var allTrue = true;
	for (var i=0; i<arr.length; i++) {
		if(!callback(arr[i])) {
			allTrue = false;
		}
	}
	return allTrue;
}

function test_evenGreaterThanFive(num) {
	return num%2===0 && num>5;
}

var testArray = [1,2,3,4,5,6,7,8,9,10];
var testTrueArray = [6,8,10,12];

console.log(myEvery(testArray,test_evenGreaterThanFive)); //should be false
console.log(myEvery(testTrueArray,test_evenGreaterThanFive)); //should be true