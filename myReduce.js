// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce for more details
// Don't worry about initialValue at first. You can always add it in later.

function myReduce(arr, callback, initialValue) {

//  CODE INSIDE HERE   //
	var reducedVal;
	var prevValue;
	var currValue;
	var currIndex;

	for (var i=0; i<arr.length; i++) {
		if (i===0){
			if(initialValue==="" || initialValue===null || initialValue===undefined) {
				prevValue = arr[i];
			} else {
				prevValue = initialValue;
			}
		} else {
			prevValue = reducedVal;  //prevValue is the reducedVal from the last run, bc it hasn't been updated with the new values from the callback for index i in the for loop (it's still the value from index i-1)
		}

		if ((initialValue===null || initialValue===undefined || initialValue==="") && i===0) {
			currValue=arr[1];
			currIndex = 1;
		} else {
			currValue = arr[i];
			currIndex = i;
		}
		
		reducedVal = callback(prevValue,currValue,currIndex,arr);
	}

	if((initialValue!=="") && arr.length===0) {
		reducedVal = initialValue;
	}

	return reducedVal;

	//[0, 1, 2, 3, 4].reduce(function(previousValue, currentValue, currentIndex, array) {
  //return previousValue + currentValue;
//}, 10);
}

/*
 Best if you don't code out here.
 If you want to check your code, use `index.js`!
*/







// export this function (you can ignore this for now)
module.exports = myReduce;
