import '../styles/index.scss';

console.log("Hello JavaScript");

//Destructuring Arrays : Assign array elements to Variables
let cardIDs = [100, 200, 300];
let [,...caaars]= cardIDs; // [,- no of commas delete that many items from array]
console.log("The car IDs are", caaars);

//Destructuring Objects : Assign array elements to Variables
let car = {color:{9999:'red',4444:'green', 5777575:'violet', 4884:'yellow'}, id:[9999,4444,577575,4884]};
let {id, color}= car;
console.log("Car attributes are", id, color);

//Spread Syntax






