let universalSet = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], setA = [], setB = [], setC =[];

(function determineA() {
	universalSet.forEach((x) => {
		if(x <= 5) setA.push(x);
	});
	console.log(setA);
}());
// https://stackoverflow.com/questions/43821759/why-array-foreach-is-slower-than-for-loop-in-javascript
// my teacher said that he knows the performance issues of foreach, but the syllabus is teaching this so here we are i guess


(function determineB() {
	universalSet.forEach((x) => {
		let resultant = x + 6;
		if(universalSet.includes(resultant)) setB.push(resultant);
	});
	console.log(setB); 
	// another way you can do this is by checking if the number is bigger than 6.
	// { x+6 | x ∈ U }
	// if we know that the set consists of values that have an addition of 6, with the lowest possible being 1, we know that the lowest in set B is bigger than 6, but within U
  // but again the syllabus wants us to use this other method
}());

(function determineC() {
	// {3x | (x-2)(x-3)(x-4) = 0} cubic equations
	// 1) find the root of the values (2, 3 and 4)\
	// 2) make sure the values, after being multiplied by 3 is a part of set U
	// 3) push to set
	
	// the question says that we do not need to determine the roots in code, instead already having the roots in an array.
	let roots = [2, 3, 4];
	roots.forEach((rootValue) => {
		let rootMulByThree = rootValue * 3;
		if(universalSet.includes(rootMulByThree)) setC.push(rootMulByThree);
	});
	console.log(setC);
}());
