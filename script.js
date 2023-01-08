// complete the given function

function palindrome(str){
	let str2 = "";
	let len2 = str.length();
	

		for (let i =len2 -1, i >= 0; i-- ){
				str2.append(str[i])
		}
		if (str2 == str){
			return true;
		}
		else{
			return false;
		}
}
module.exports = palindrome
