
var input = prompt("Find square root of !");

var num = Number(input);

console.log(typeof num);

if(typeof num === 'number'){
	console.log('sqrt is '+ Math.sqrt(num));//will be NaN for non numbers

}else{
	console.log('You entered number data');
}

var person = {
	firstName: "X"
	isPerson: function(){
		return this === person;//return true
	}
}



