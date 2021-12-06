// const numbers = [1, 2, 3, 4, 5];
 
// const output = numbers.map(number => {
//     if(number %2 == 1){
//         return number * 100
//     }
//     return number
// });
// console.log(output); 





// const numbers = [1, 2, 3, 4, 5];

// const output = numbers.map(number => {
//     if(number %2 == 0){
//         return number * 100;
//     }
//         return number * 10;
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
// };

// input.map(sum => {
//     if(sum.today == 'false'){
//        output.history.push(sum);
//         console.log(output);

//     } else {
        
//         output.today.push(sum)
//     }
// });
// console.log(output);








// const input = [{item : 'maggie', type : 'snack', price : 10},
//                {item : 'atta', type : 'grocery', price : 20},
//                {item : 'milk', type : 'grocery', price : 20}];


// const output = {
//     snack : 0,
//     grocery : 0,
// };
// input.map(obj => {
//     if(obj.type == 'grocery'){
//         output.grocery = obj.price + obj.price
//     } else {
//         output.snack = obj.price
//     }
// });
// console.log(output);






// const input = [{item : 'maggie', type : 'snack', price : 10},
//                {item : 'atta', type : 'grocery', price : 20},
//                {item : 'milk', type : 'grocery', price : 20}];


// const output = {};
// input.map(sum => {
//     if(sum.type == 'grocery'){
//         output[sum.type] = sum.price + sum.price
//     } else { 
//         output[sum.type] = sum.price
//     }
// });
// console.log(output);

 








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
//                     location: 'india',
//                     salary: 50000
//                 }
//             },
//             {
//                 name: 'Raju',
//                 occupation:{
//                     designation: 'softwareEngineer',
//                     location: 'Dubai',
//                     slary: 25000
//                 }
//             }];
// const output = input.filter(obj => {
//     if(obj.occupation.salary > 25000){
//         return true;
//     }
//     return false;
// }).map(sum => {
//     return {
//         name: sum.name,
//         location: sum.occupation.location,
//         salary: sum.occupation.location,
//         designation: sum.occupation.designation
//     }
// })
// console.log(output);                    







// const pahara = 18;

// let i = 1;
// for(i; i<=10; i++){
//     console.log(pahara * i);
// }





// const input = [{name : 'Raju', gender : 'male'},
//                {name : 'khushboo', gender : 'female'},
//                {name : 'Arya', gender : 'female'}];


// const output = {};
// input.map(obj => {
// output[obj.name] = 'kumar sharma'

// });
// console.log(output);







// const input = [{name: 'Raju', age: 26, location: 'Dubai'},
//                {name: 'Roshan', age: 21, location: 'india'},           
//                {name: 'khushboo', age: 23, location: 'Dubai'}];


// const output = {};

// input.map(obj => {
//     if(output[obj.location]){
//     output[obj.location] = [...output[obj.location],obj.name];
//     } else {
//     output[obj.location] = [obj.name];
//     }
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







                                                // reverse String

// let input = 'khushboo';

// let palindrome = input.split('').reverse().join('');

// if(input == palindrome){
//     console.log('palindrome hai')

// } else {
//     console.log('palindrome nahi hai')
// };




                                                   // check if string is palindrome    


// let input = ['khushboo', 'radar', 'Arya', 'level'];

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

// let substring = ['khushboo', 'name', 'Raju', 'sum'];

// substring.map(str => {
//     if(input.includes(str)){
//         console.log('substring h')
//     } else {
//         console.log('substring nahi h')
//     }

// });









// let input = [1, 2, 2, 3, 5, 3, 3, 4, 1 ];


// let realNumbers = [];
// input.map(num => {
//     if(!realNumbers.includes(num)){
//         realNumbers.push(num)
//     }

// });
//     console.log(realNumbers);










// let input = [1, 2, 2, 3, 5, 3, 3, 4, 1 ];

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





// let detabase = [];

// let addPerson = (person) =>{
//     detabase.push(person)
//     console.log('push kar diya')
// }
// addPerson({name : 'khushboo',
            
//        location  : 'Dubai'})

// console.log(detabase);


// let getPerson = (nam) => {
//     detabase.find(sum => { 
//         if(sum.name == nam){
//             return true
//         }
//             return false
//     })

// }
// getPerson('khushboo')
// console.log(detabase)








// const add = (num1, num2 )=> {
//     return num1 + num2  
// };
//  const output =   add(5, 6)
// console.log(output);
 





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


    // function sum(name){
    //     console.log("my name is khushboo");

    // }
    //   id = setTimeout(sum, 2000, 'name');
    // clearTimeout(id);



//     function sum(){
//         console.log("khushboo");  
//     };
//     id = setInterval(sum, 5000, "name, person")
//  clearInterval(id) 



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












const input = [4, 5, 7, 8, 9, 4];

let output = 0
 let sum = input.map(number => {
     output = number + output
     
});
console.log(output);