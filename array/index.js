//let fruit1 = 'apple';
//let fruit2 = 'mango';
//let fruit3 = 'litchi';

//console.log(fruit1, fruit2, fruit3);

//let newArr = [['hello',2, true], ['iims','bscit'],['kathmandu','pokhara','dharan']];
//console.log(newArr[2][2]);

//let dc = ['superman', 'batman', ['flash','wonderwoman'], 'aquaman'];
//dc.splice(2,0,'joker');
//console.log(dc);
//dc[2].unshift('joker'); //dc[2].splice(0,0,'joker')
//console.log(dc);

//let dc = ['superman', 'batman', 'aquaman'];
//dc.splice(3,0,'joker');//dc[3]='joker'; dc.push('joker')
//console.log(dc);

//concat
let dc = ['superman', 'batman', 'aquaman'];
let villain=['joker'];
let dcHero=['flash'];
//console.log(dc.concat(villain,dcHero));

//slice
//let favFood = ['Laphing', 'Pizza', 'Mo:Mo', 'pasta', 'ramen'];
//let food=favFood.slice(0);
//console.log(favFood);

//slice with 2 indexes
//let fruits = ['mango', 'banana', 'apple', 'pears'];
//let citrus = fruits.slice(1,2);
//console.log(fruits);
//console.log(citrus);

let myself = {};
myself.name = 'Sneha Nakarmi';
myself.address = 'Kirtipur';
myself.college = 'IIMS';
myself.faculty = 'IT';
myself.id = 1001953478;
//console.log(myself);

//let person= {firstName: "Sneha", lastName: "Nakarmi", age: 20, address: "Kirtipur"};
//console.log('My name is ' +myself.name+ 'I live in ' +myself.address+ 'I am studying ' +myself.faculty+ ' in' +myself.college+ ' college. And my student id is: '+myself.id+ '.');

//function
function myIntro(firstName, lastName){
	return firstName + lastName;
}
let result = myIntro('Sneha', 'Nakarmi');
console.log(result);
