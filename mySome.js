function mySome(arr,callback) {
	var anyTrue = false;
	for (var i=0; i<arr.length; i++) {
			console.log("at index "+i+" with array "+arr);

		if(callback(arr[i],i,arr)) {
			anyTrue = true;
			return anyTrue;
		}
	}
	return anyTrue;
}

function test_evenGreaterThanFive(num,ind,arr) {
	return num%2===0 && num>5;
}

var testArray = [1,2,3,4,5,6,7,8,9,10]; 
var testArray1 = [6,8,10,12];
var testArray2 = [1,3,5];
var testArray3 = [1,2,3,4,5,6];
console.log(mySome(testArray,test_evenGreaterThanFive)); //should be true
console.log(mySome(testArray1,test_evenGreaterThanFive)); //should be true
console.log(mySome(testArray2,test_evenGreaterThanFive)); //should be false
console.log(mySome(testArray3,test_evenGreaterThanFive)); //should be true