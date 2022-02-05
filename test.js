// const numbers = [1, 2, 3, 4, 5];
 
// const output = numbers.map(number => {
//     if(number %2 == 0){
//         return 1 
//     }
//     return number
// });
// console.log(output); 









// const names = ['Raju', 'khushboo', 'Arya', 'Alisha'];

// const output = names.map(name => {
//    return name + ' ' + 'sharma'
    
// });
// console.log(output);






// let input = [{firstName : 'Raju'},{firstName : 'khushboo'}];


//  let output = input.map(sum => {
//     sum.lastName = 'sharma'
//     return sum
// });
// console.log(output);







// const input = [{firstName : 'Raju', type : 'adult'}, 
//              {firstName : 'Arya', type : 'baby'},
//              {firstName : 'Arya', type : 'baby'}];


// const output = input.filter(obj => {
//     if(obj.type === 'baby'){  
//         return true
//     }
//         return false
//   });
// console.log(output);







// const numbers = [1, 2, 3, 4, 5];

// const count = numbers.filter(number => {
//     if(number %2 == 1){
//         return true
//     }
//     return false
// });
// console.log(count);




// const numbers = [1, 2, 3, 4, 5];

// const output = numbers.find(number => {
//     if(number === 5){
//         return true
//     }
//         return false
// });
// console.log(output);








// const names = [{name : 'Raju'}, {name : 'Roshan'}];

// const output = names.find(sum => {
//     if(sum.name == 'Raju'){
//         return true;
//     }
//         return false
// });
// console.log(output);








// const input = [{name : 'Raju', gender : 'male'}, 
//                {name : 'khushboo', gender : 'female'}, 
//                {name : 'Arya', gender : 'female'}];

// const output = {};
// input.map(sum => {
//     if(output[sum.gender]){
//     output[sum.gender] = [...output[sum.gender],sum]
//     } else {
//     output[sum.gender] = [sum]
//     }
// });
// console.log(output);
                                                                 




// const input = [{name : 'Raju', age : 26, location : 'Dubai'},
//                {name : 'khushboo', age : 23, location : 'Dubai'},
//                {name : 'Roshan', age : 19, location : 'india'},
//                {name : 'Arya', age : 2, location : 'Dubai'}];

// let output = {
//     above20 : [],
//     below20 : [],
// };
// input.map(sum => {
//     if(sum.age > 20){ 
//     output.above20.push({
//         name : sum.name,
//         location : sum.location
//     })       
// } else {
//     output.below20.push({
//         name : sum.name,
//         location : sum.location
//     })
// }

// });
// console.log(output);






// const input = [{type : 'Dms', today : 'true', valve : 'Approve'},
//                {type : 'Abc', today : 'false', valve : 'Rej'},
//                {type : 'wore', today : 'false', valve : 'wore'}];

// let output = {
//     history : [],
//     today : [],
// }

// input.map(sum => {
//     if(sum.today == 'false'){
//        output.history.push(sum);

//     } else {
        
//         output.today.push(sum)
//     }
// });
// console.log(output);






// const input = [{item : 'maggie', type : 'snack', price : 10},
//                {item : 'atta', type : 'grocery', price : 20},
//                {item : 'milk', type : 'grocery', price : 30}];

// let output = {} 

// input.map(obj => {
//     if(output[obj.type]){
//         output[obj.type] = output[obj.type] + obj.price
//     } else {
//       output[obj.type] = obj.price  
//     }
  
// });
//     console.log(output);








// let input = [10, 5, 10, 15];

// let output = 0;
// input.map(num => {             
// output = output + num

// });
//  console.log(output);  
    

 




// const input = [
//             {
//                 name: 'khushboo',
//                 occupation: {
//                     designation: 'softwareEngineer',
//                     location:{
//                     mycity: 'delhi',
//                     age: 18
//                     }
//                 }
//             },
//             {
//                 name: 'Raju',
//                 occupation:{
//                     designation: 'softwareEngineer',
//                     location:{
//                     mycity: 'Dubai',
//                     slary: 25000
//                     }
//                 }
//             }];




// const pahara = 18;

// let i = 1;
// for(i; i<=10; i++){
//     console.log(pahara * i);
// }





// const input = [{name : 'Raju', gender : 'male'},
//                {name : 'khushboo', gender : 'female'},
//                {name : 'Arya', gender : 'female'}];

// let output = {};
// input.map(obj => {
// output[obj.name] = 'kumar sharma'

// });
// console.log(output);





// const input = [{item : 'maggie', type : 'snack', price : 10},
//                {item : 'atta', type : 'grocery', price : 20},
//                {item : 'milk', type : 'grocery', price : 30}];

// let output = {}

// input.map(obj => {
//     if(output[obj.type]){
//         output[obj.type] = output[obj.type] + obj.price
//     } else {
//       output[obj.type] = obj.price  
//     }
  
// });
//     console.log(output);










// const input = [
//                 {name: 'Raju', age: 26, location: 'Dubai'},
//                {name: 'Roshan', age: 21, location: 'india'},           
//                {name: 'khushboo', age: 23, location: 'Dubai'}
//             ];

// const sampleOutput = {
//     Dubai: ['Raju', 'Khushboo'],
//     india: ['Roshan']
// }

// const output = {};

// input.map(person => {
//     if(output[person.location]){
//         output[person.location] = [...output[person.location], person.name]
//     } else {
//         output[person.location] = [person.name];
//     }
// });

// console.log(output);



// const oldValue = ['Raju']
// const newValue = [...oldValue, 'Khushboo']










// const input = [{firstName: 'khushboo'}, {firstName: 'Raju'}];

//  const output = input.map((obj) => {
//     obj.lastName = 'sharma'
//     return obj

// });
// console.log(output);













                                            //   find largest number


// const numbers = [1, 5, 3, 7, 10, 2, 9];

// let output = 0;
// numbers.map(number => {
//     if(output < number){
//         output = number
//     }
// });
// console.log(output);







// const numbers = [1, 5, 3, 7, 10, 2, 9];
                                                             
//  let sum = numbers.sort((num1, num2) => {
//     return num1-num2;
// });
// let num = sum
// console.log(num[sum.length-2]);






//  const numbers = [1, 5, 3, 7, 10, 2, 9];

// let minimumNumber = 10;
// numbers.map(number => {
//     if(minimumNumber > number){
//         minimumNumber = number
//     }
// });
// console.log(minimumNumber);





                                                // asending & descending


// let input = [1, 3, 2, 6, 4, 5, 7]
// let ascendingOrder = input.sort((num1, num2) => {
//         return num1-num2
// });
// console.log(ascendingOrder);










// const input = [1, 5, 7, 3, 2, 4, 6];

// let descendingOrder = input.sort((num1, num2) => {
//         return num2-num1
// });
// console.log(descendingOrder);







                                


                                                // check if string is palindrome    


// const input = 'khushboo';

// let palindrome = input.split('').reverse().join('');

// if(input == palindrome){
//     console.log('palindrome hai')

// } else {
//     console.log('palindrome nahi hai')
// };




                                                   

// const input = ['khushboo', 'radar', 'Arya', 'level'];

// let output = input.map(sum => {
//     let str = sum.split('').reverse().join('');
//     if(sum == str){
//         console.log('palindrome h')
//     } else {
//         console.log('palindrome nahi h')
//     }
// });







                                    //   count number of vowels in a string


// const input = 'my name is Raju'.split('');
// let vowels = ['a', 'e', 'i', 'o', 'u']

// let number = 0;
// input.map(sum => {
//     if(vowels.includes(sum)){
//         number++
//     }
// })
//     console.log(number)






                                    // check if substring is present


// const input = 'my name is Raju';

// const substring = ['khushboo', 'name', 'Raju', 'sum'];

// substring.map(str => {
//     if(input.includes(str)){
//         console.log('substring h')
//     } else {
//         console.log('substring nahi h')
//     }

// });









// const input = [1, 2, 2, 3, 5, 3, 3, 4, 1 ];


// let realNumbers = [];
// input.map(num => {
//     if(!realNumbers.includes(num)){
//         realNumbers.push(num)
//     }

// });
//     console.log(realNumbers);










// const input = [1, 2, 2, 3, 5, 3, 3, 4, 1 ];

// let duplicates = [];
// let realNumbers = [];

// input.map(num => {
//     if(!realNumbers.includes(num)){
//         realNumbers.push(num)
//     } else {
//         duplicates.push(num);
//     }
// });
// console.log(duplicates);








// const input = [1, 2, 3, 4, 5];

// let output = input.reverse();
//     console.log(output);








// const number = [2, 4, 6, 8, 8, 9, 6, 4];

// const count = 6;
// const sum = number.filter(num => {
//     if(count !== num){
//         return true
//     }
//     return false
// });

// console.log(sum)






                                  // Array remove duplicats without use map one line


// var arr=[1,2,3,4,5,6,7,8,9,1,2,3,4,5,6,7,8,9,];
// var set=new Set(arr);
// let setarr=[...set];
// console.log(setarr);







// const sum = [1, 2, 2, 3];

// let num = new Set(sum)

// console.log([...num]);
 



 


                               // function



// const add = (num1, num2 )=> {
//     return num1 + num2  
// };
// console.log( add(5, 6) );
 





// const addition = (num1, num2) => {
//     return num1 + num2
// };
//    const output =  addition(8, 4);
    

// const subtraction = (num1, num2) => {
//     return num1-num2
// }
// const count = subtraction(5, 4);


// const maltiplication = (num1, num2) => {
//         return num1 * num2
// };
// const sum = maltiplication(8, 2)


// const division = (num1, num2) => {
//         return num1 / num2
// };
// const num = division(8, 2)

// console.log(output, count, sum, num)






// const persons = [];
// const addPerson = (person) => {
//     persons.push(person)
// };
//  const output = addPerson({name : 'khushboo',
//             age : 23})

//     console.log(persons);






    // const persons = ['Raju', 'khushboo', 'Arya', 'Alisha'];

    // const deletePerson = (preson) => {
    //     persons.map(str => {
            
    //         delete(str)
    //     })
    // } 
    // const sum = deletePerson('khushboo');
    //     console.log(persons);





                                            // setTimeout & setInterval

    


    function sum(){
        console.log("khushboo");  
    };
    id = setInterval(sum, 5000, "name, person")
 clearInterval(id) 





// function myBabyName(name){
//     console.log("my baby name is Arya")
// };
//     setTimeout(myBabyName, 2000, "name");



 

// function myBabyName(name){
//     console.log("my baby name is Alisha")
// };
//     setTimeout(myBabyName, 2000, "name")







// function MyFamily(){
//     console.log("Raju, khushboo, Arya, Alisha")
// };
//    id = setInterval(MyFamily, 5000);
    






// function random(min, max) { 
//     return Math.floor(Math.random() * (max - min + 1) + min)
//   };


//   const num1 = random(1, 10);
//   const num2 = random(1, 10);

//   console.log('addition is: ', (num1+num2))





  
    //   function sum(min, max) { 
    //     return Math.floor(Math.random() * (max - min + 1) + min)
    //   }
      
      
    //   setInterval(() => {
    //     const num1 = sum(1, 10);
    //     const num2 = sum(1, 10);

    //     console.log(num1 + num2)
    //   }, 2000);
    






// function randomIntFromInterval(min, max) { 
//     return Math.floor(Math.random() * (max - min + 1) + min)
//   }
  
// setInterval(() => {
//     const sum1 = randomIntFromInterval(100, 500);
//     const sum2 = randomIntFromInterval(100, 500);
//     console.log(sum1 + sum2);
// }, 1000)







// const input = ['Raju', 'khushboo', 'Arya', 'Alisha'];

// input.map((name, i) => {
//     setTimeout(() => {
//         console.log(name)
//     },  i* 5000)
// })







// const input = {name: 'khushboo', location: {country: 'Dubai'}};
// const {name, location: {country}} = input;
// console.log(name, country)



// const age = 26;
// const name = `Raju ${age}`;
// console.log(`My name is ${name}`);



// const sum = {nam: 'khushboo', person: {name: 'Raju'}};
// const {nam, person: {name}} = sum;
//     console.log(nam, name);










// const input1 = [1, 2, 3, 4, 5]; 
// const input2 = [4, 5, 6, 7, 8];

// const number = 4;

// if(input1.includes(number) && input2.includes(number)){
//     console.log('dono me h')
// } else if(input1.includes(number)){
//     console.log('1 me h')
// } else if(input2.includes(number)){
//     console.log('2 me h')
// } else{
//     console.log('kisi me nami h')
// }










// const sum = () =>  {
//     return 'khushboo'
// };
//  const result = sum();
// console.log(result)









// const array = [1,2,3,4,5]

// const newArray = [...array,6,7,8,9,10]





// const object = {
//     name: 'Raju',
//     age: 26
// }

// const newObject = {
//     ...object,
//     lastName: 'Sharma'
// }

// console.log(newObject);








// const input = [{name : 'Raju', age : 26, location : 'Dubai'},
//                {name : 'khushboo', age : 23, location : 'Dubai'},
//                {name : 'Roshan', age : 19, location : 'india'},
//                {name : 'Arya', age : 2, location : 'Dubai'}];

// let output = {
//     above20 : [],
//     below20 : [],
// };

// input.map(obj => {
//     if(obj.age > 20){
// output.above20 = [...output.above20,{
//         name : obj.name,
//         location: obj.location
// }]
//     } else {
// output.below20 = [...output.below20,{name: obj.name,
//                     location: obj.location}];        
//     }
// })
//     console.log(output);









// const num = 24;

// let prime = true;
// for(let i = 2; i <= num - 1; i++){
//     let sum = num % i
//     if(sum == 0){
//         prime = false;
//         console.log('prime nahi hai, ', i, ' se divide ho gaya')
//         break;
//     }
// }
// if(prime == true){
//     console.log('prime ,h')
// }








// let obj = {names : ['Raju', 'khushboo', 'Arya', 'Alish'],reversName : []};


// obj.names.map(str => {
// let count = str.split('').reverse().join('');
// obj.reversName.push(count);
// });
// console.log(obj);





// let number = 21
 
// let prime = true;
// for(let i = 2; i <= number-1; i++){
//     let num = number % i;
//     if(num == 0){
//         prime = false
//     console.log('prime nahi h')
//     break;
//     }
//         };
//     if(prime == true){
//     console.log('prime h')
//     };







                                          // File read,write,delete

// const fs = require('fs');

// fs.writeFileSync('khushboo.js', 'hello!');




// var fs = require('fs');
// var buffer = fs.readFileSync("test2.js", 'utf-8');
// console.log(buffer)




// var fs = require('fs');
// fs.unlinkSync('khushboo.js');