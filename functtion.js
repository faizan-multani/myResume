// // console.log("hi console")
// // let name="faijan multani" // using let we can't re-declare variable bcoz it is a block scope variable,it can be updated.
// // // let name="mahesh"
// // console.log(name)

// // const age=25    // using const we can't re-declare variable bcoz it is a block scope variable,it can't be updated.
// // // age=22
// // // const age=23
// // console.log(age)

// // var salary=25000 // using var we can re-declare value/variable,it is a global variable.(it can be updated).
// // var salary=30000

// // const student = {
// //   age: 21,
// //   name: "faizan",
// //   salary: 12000,
// // }
// // console.log(student.salary)

// // a = 6
// // b = 2
// // c = a ** b Exponention
// // c = a % b Modulus
// // console.log(c)

// //a = a + 1;  // Increment
// // a++
// // console.log(a)
// // a=8;
// // b=2;
// // c=a%b;
// // console.log(c)

// // let num=7;
// // if(num%2==0){
// //     console.log("even")
// // }
// // else{
// //     console.log("odd")
// // }

// for (let i = 1; i <= 5; i++) {
//   console.log("hello")
// }

// // let sum = 0
// // for (let i = 1; i <= 5; i++) {
// //   sum = sum + i;
// //   console.log(sum)
// // //   console.log(i)
// // }
// // console.log(sum)

// // let str = "hello world"
// // let size = 0
// // for (let i of str) {
// //   console.log(i)
// //   size++
// // }
// // console.log(size)

// // for (let i = 1; i <= 100; i++) {
// //   if (i % 2 == 0) {
// //     console.log("even numbers are:", i)
// //   }
// // }

// // let gameNum = 25
// // let guessNum = prompt("guess the number")

// // while (guessNum != gameNum) {
// //   guessNum = prompt("you have entered wrong Number,try agtain")
// // }
// // console.log("congratulations!!")

// let str = `this is in lower`
// str = str.toUpperCase()
// console.log(str)

// let cutStr = `   my string       `
// cutStr = cutStr.trim()
// console.log(cutStr)

// let slice = `hello`
// slice = slice.slice(0, 4)
// console.log(slice)

// let s1 = "hello"
// let s2 = "world"

// let concat = s1.concat(s2)
// console.log(concat)

// let a = "abcd"
// let replace = a.replace("cd", "fg")
// console.log(replace)

// // let fullName=prompt("enter your full name wihtout spaces");
// // let userName="@"+fullName+fullName.length;
// // console.log(userName);

// const arr1 = ["tree", 795, [0, 1, 2]]
// console.log(arr1)

// for (let i = 0; i < arr1.length; i++) {
//   console.log(arr1[i])
// }

// let cities = ["mumbai", "kolkata", "pune", "jaipur", "bangluru"]
// for (let city of cities) {
//   console.log(city.toUpperCase())
// }

// let series = [10, 20, 30, 40, 50, 60, 70, 80]
// for (let n of series) {
//   console.log(n)
// }

// let marks = [56, 90, 76, 82, 37, 48]
// let sum = 0

// for (let val of marks) {
//   sum = sum + val
// }

// avg = sum / marks.length
// console.log(`avgrage sum is = ${avg}`)
// console.log("==============")

// // q2. have a items list [100,245,600,323,900],have 10% off on the each items,get final price on each items?
// let items = [100, 245, 600, 323, 900]
// let i = 0
// for (let val of items) {
//   let offer = val / 10
//   // items[i] = items[i] - offer;
//   val = val - offer
//   console.log(`final price aftre giving offer = ${val}`)
//   i++
// }

// let random = [1, 2, 3, ["hi", "hello"]]
// // console.log(random[3][0]);
// random[2] = 20
// random[3] = "bye"
// console.log(random)
// let convert=random.toString();
// console.log(convert);

// let arr2=["ajay","manish","dilip","vayu"];
// // let remove=arr2.pop();
// console.log(arr2.pop());
// console.log(arr2)

// function myFunction(a, b) {
//   // console.log(a+b);
//   console.log("bye");
//   return a + b;   // return will be last executable code of any function
//   console.log("hi")
// }
// let sum = myFunction(110, 240)
// console.log(sum);

// let arrowMul=(a,b)=>{
//   return a*b;
// }
// let res=arrowMul(2,6);
// console.log("multiple :",res);

function countVowels(str) {
  let count = 0
  for (let char of str) {
    if (
      char == "a" ||
      char == "e" ||
      char == "i" ||
      char == "o" ||
      char == "u"
    ) {
      count++
    }
  }
  console.log(count)
}

let Countvowels = (str) => {
  let c = 0
  for (let char of str) {
    if (
      char == "a" ||
      char == "e" ||
      char == "i" ||
      char == "o" ||
      char == "u"
    ) {
      c++
    }
  }
  console.log(c)
}
