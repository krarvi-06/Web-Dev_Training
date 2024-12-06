// console.log("----welcome in js -----");
// const title = document.
// getElementById("title");
// console.log("title");

// title.innerText = "hii i'm......"

// title.textContent = "everybody"
// const desc = document.
// getElementsByClassName("desc");
// console.log("desc");
// desc[0].innerText = " myself anything";


const heading= document.
getElementsByClassName("heading");
//let i = 0;
//while (i < heading.length){
  //  heading[i].ClassName = "kuch_bhi";
    //i++;
//}
console.log(heading);
   
for(let i = 0; i< heading.length; i++){
    //even index
    console.log("------")
    if(i %2 ===0){
    heading[i].innerText = "Even";
    }else{
    heading[i].innerText = "odd";
    }
}


// let arr=[0,8,,8,2,79,26,59,66,28,72]
// // index =arr.findIndex((value,index)=>{   }
//     for(let i=0;i<arr.length;i++){
//         console.log(i);
    //},

 const arr =[2,8,9,6,22,44,88,25,45,98,25]
// print sprcific element of an Array
// syntax : array_name[index]
// lenth of an array : array_name.lenght

// Separating even numbers
const evenNumbers = arr.filter(num => num % 2 === 0);

// Separating odd numbers
const oddNumbers = arr.filter(num => num % 2 !== 0);

//output
console.log("Even Numbers:", evenNumbers);
console.log("Odd Numbers:", oddNumbers);