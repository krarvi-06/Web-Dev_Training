// console.log(".....wrlcome in js......")
// let arr = [1,2,3,4,5,6,"hello", "true"];
// for(i=0; i<arr.length;i++){
// console.log(arr[i]);
// }
// arr.push("anybody");
//  console.log("anybody");
// arr.pop("anybody");
// console.log("everybody");
//we use the arr.pop to remove last element of thr array
// we use the arr.push to add extra element in array 
// console.log(arr.length)
// arr.splice(2,1);
//for update the value in array 


// const newarr =[5,5,6,4,3,5,4,56,4,3];
// let count = 0;
// // for(let i = 0; i<arr.length; i++){
// //     console.log(arr[i]);
// //     if(arr[i]===5) count++;
// // }
// // console.log(cou);



// for(let i = 0; i<newarr.length; i++){
//     // console.log(newarr[i]);
//     if(newarr[i] %2 ===0) count++;
// }
// console.log(count);



// let arr = [1, 4, 5, 6, 73, 2, 4];
// arr = arr.filter(item => item !== 5);
// console.log(arr);

// let arr = [1, 4, 5, 6, 73, 2, 4];
// let count = 0
// for (let i=0;i<arr.lenght; i++);
// if (arr[i] === 5) {
//     arr.sliced(i,1);
// }

// let arr = [1, 4, 5, 6, 73, 2, 4]; 
// let sum =0;
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 === 0) {
//         sum += arr[i]; 
//     }
// }
// console.log("Sum of even numbers:", sum); 


// for (let i = 0; i < arr.length; i++) {
//     if (arr[i]%2 !== 0){
//         sum += arr[i];
//     }
// }
// console.log("Sum of odd numbers:", sum);
 

// let arr = [1, 2, 3, 4, 5, 7, 8, 9];
// function findMissingNumber(arr) {
//     const n = arr.length + 1;
//     const expectedSum = (n * (n + 1)) / 2;
//     const actualSum = arr.reduce((sum, num) => sum + num, 0);
//     return expectedSum - actualSum;
// }
// console.log(findMissingNumber(arr)); 
//we lear n to how print work innn js.
let student_id_card = {
    // key: value
    name: "rohan",
    roll_number: 4556, 
    address: "abc...", 
    section: "B-tech",
    branch: "cse", 

};

// print:
const name = student_id_card.name;
const roll_number = student_id_card.roll_number; 
const result = student_id_card.result="85"; 
 console.log(name)
 console.log(roll_number);
//adding something
 student_id_card.result="pass";
//  const result =  student_id_card.result;
 console.log(result);
//changesome data
student_id_card.section = "b"
console.log(student_id_card)
//deleting something
delete student_id_card.name;
console.log(student_id_card)