// Function: Function is a block of code to performe specific task and can be invoked whenever needed.
// function sum(x,y){
//     c = x + y;
//     return c;
// }
// Craete a function that takes string as a argument and return the number of vobels in the string;
// let count = 0;
// function countVobels(str){
//     for (char of str){
//         if(char === 'a' || char === 'e' || char === 'i' || char  === 'o' || char === 'u'){
//             count++;
//         }
       
//     }
//      return count;
// }

// Arrow function  modern function 
// countVobels = (str) => {
//     let count = 0;
//     for (char of str){
//         if(char === 'a' || char === 'e' || char === 'i' || char  === 'o' || char === 'u'){
//            count++;
//        }
       
//     }
//      return count;
// }

// HOF/HOM : Higher Order Function or Higher Order Methods
// a function takes another function as an argument and return as a function is called hof 
// A callback : is a function to pass as an argument so another  function recieve and call it.
// print the square value for each value
// let array = [2,4,5,6,7,8];
// const squareArray = array.forEach(val=>{
//     console.log(val*val);
// })
// array.forEach(squareArray);  // type of callback pass a function
// array.forEach((val )=>{
//     console.log(val);
// });

// map // use like for each diffrence is map give the new array and keep original array as it it.

// let nums = [2,4,5,6,7,8];
// let newNum = nums.map((val) =>{
//         return val*2
// }) 
// console.log(newNum);

// Filter : Create a new array for a true condition / filter
// let num = [1,2,3,4,5,6,9,8];
// let evenNum = num.filter((val)=>{
//     return val % 2 == 0
// });
// console.log(evenNum);
// reduce : this is use fora opration to  reduce a single of the array 
// let num = [2,3,5, 6];
// let output = num.reduce((prev, curr) => {
//     return prev + curr;
// })
// console.log(output);
// let marks = [87, 93, 64, 99, 86];
// let topper = marks.filter((num)=>{
//     return num > 90 ;
// });
// console.log(topper);