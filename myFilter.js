function myFilter(arr,callback) {
	var filteredArray = [];

	for (var i=0; i<arr.length; i++) {
		if(callback(arr[i])) {
			filteredArray.push(arr[i]);
		}
	}
	return filteredArray;
}

function test_evenGreaterThanFive(num) {
	return num%2===0 && num>5;
}

var testArray = [1,2,3,4,5,6,7,8,9,10];

console.log(myFilter(testArray,test_evenGreaterThanFive));