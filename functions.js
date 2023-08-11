
Print odd numbers in an array


(function(array){
             for(var i = 0 ; i< array.length ; i++){
                        if(array[i]%2!=0){
                           console.log(array[i])
                        } 
                   }
             })([1,2,3,4])



Convert all the strings to title caps in a string array

	function sentenceCase (str) {
	if ((str===null) || (str===''))
		return false;
	else
	str = str.toString();
	
	return str.replace(/\w\S*/g,
	function(txt){return txt.charAt(0).toUpperCase() +
		txt.substr(1).toLowerCase();});
	}
	
	console.log(sentenceCase('geeks for geeks'));

Sum of all numbers in an array

	let myNums = [1, 2, 3, 4, 5];
        let sum = 0;
	for (let i = 0; i < myNums.length; i++ ) {
 		 sum += myNums[i];
	}
	console.log(sum) 






Return all the prime numbers in an array
	var numArray = [2, 3, 4, 5, 6, 7, 8, 9, 10]

numArray = numArray.filter((number) => {
  for (var i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) return false;
  }
  return true;
});

console.log(numArray);


Return all the palindromes in an array

let arr =  ['foo', 'racecar', 'pineapple', 'porcupine', 'pineenip']

let palindromeArr = []

arr.forEach(word => {
  if (isPalindrome(word)) {
    palindromeArr.push(word)
  }
})

console.log(palindromeArr)


Remove duplicates from an array


let chars = ['A', 'B', 'A', 'C', 'B'];
let uniqueChars = [...new Set(chars)];

console.log(uniqueChars);






