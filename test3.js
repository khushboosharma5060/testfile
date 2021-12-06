// const input2 = [8,8,4,4,4,5,6,10];
// const input2 = [1,2,3];
// const run = () => {
//     const output = input2.reduce((acc, curr) => {
//         if(acc.accumulator.includes(curr)){
//             return {
//                 duplicates: acc.duplicates.includes(curr) ? [...acc.duplicates] : [...acc.duplicates, curr],
//                 accumulator: [...acc.accumulator]
//             }
//         } else {
//             return {
//                 duplicates: [...acc.duplicates],
//                 accumulator: [...acc.accumulator, curr]
//             }
//         }
//     }, {
//         duplicates: [],
//         accumulator: []
//     }).duplicates.sort((a,b) => a-b);

//     return output.length ? output : [-1];
// }

// console.log(run());


// let numbers = [4, 7, 6, 8, 9, 4, 6,3, 3, 4, 4, 2, 3, 2, 6, 6, 6, 7, 6];

// let numbers = [3, 2, 2, 3, 3];

// let realNumbers = [];
//  numbers.map(number => {
//      if(realNumbers.includes(number)){

//           }else{
// realNumbers.push(number);
//      }
//  });
//  console.log(realNumbers);  


// let numbers = [1, 2, 3, 4, 5];

// let sum = numbers.map(number => {
//     if(number %2 == 1){
//         return number * 100
//     }
//     return number
// });
// console.log(sum);


// let numbers = [1, 2, 3, 4, 5];

//  let count = numbers.map(number => {
//     if(number % 2 === 0){
//        return number * 100;
//     }
//       return number * 10
// });
// console.log(count);



// let names = [{firstName : 'Raju'}, {firstName : 'khushboo'}];

//  let output = [];
//  names.map(name => {      
//      name.lastName = 'sharma'
//      output.push(name)
//  });
//  console.log(output);



// let number = [{item : 'maggie', type : 'snack', price : 10},
//               {item : 'atta', type : 'grocery', price : 20},
//               {item : 'milk', type : 'grocery',  price : 20}];

// let output = {};
// number.map(sum => {
//     if(sum.type === 'grocery'){
//         output[sum.type] = sum.price * 2
//      }else{
//         output[sum.type] = sum.price
//     }
    
// });
// console.log(output);



// let numbers = [1, 5, 6, 3, 7, 10, 2, 9];

// let max = 0;
// numbers.map(num => {
//     if(max < num){
//         max = num
//     }
// });        
// console.log(max);  






// let numbers = [1, 5, 6, 3, 7, 10, 2, 9];

// let minimumNumber = Number.MAX_VALUE;
// numbers.map(number => {
//     if(minimumNumber > number){
//         minimumNumber = number
//     }
// })

// console.log(minimumNumber);





// let numbers = [1, 5, 7, 3, 2, 4, 6];

// let output = [];
// numbers.map(number => {

// })


// let numbers = [2, 4, 1, 3, 6, 5, 7];

// let output = numbers.sort((num1, num2) => {
//     return num1-num2
// });
// console.log(output);


// const input =  'level';
// const output = input.split('').reverse().join('');

// if(input === output){
//     console.log('palindrome hai')
// } else {
//     console.log('palindrome nahi hai');
// }
  



// let input = 'my name is khushboo'.split('');
// let vowels = ['a', 'e', 'i', 'o', 'u'];

// let output = 0
// input.map(char => {
//     if(vowels.includes(char)){
//         output++
//     }
// })

// console.log(output);




// let input = [1, 5, 3, 7, 10, 2, 9];

// let output = 0;
// input.map(number => {
//     if(output < number){
//        output = number
//     }
// });
// console.log(output);



// let input =  [1, 5, 3, 7, 10, 2, 9];

// let minimumNumber = 10;
// input.map(number => {
//     if(minimumNumber > number){
//         minimumNumber = number;

//     }
// });
// console.log(minimumNumber);


// let input =  [1, 5, 3, 7, 10, 2, 9];

// let output = input.sort((num1, num2) => {
//        return num1 - num2
// });

// console.log(output[input.length -2]);





// let input = 'my name is Raju'.split('');
// let vowels = ['a', 'e', 'i', 'o', 'u']

// let output = 0;
// input.map(string => {
//     if(vowels.includes(string)){
//         output++
//     }
// });
// console.log(output);






// let input = 'radar';

// let output = input.split('').reverse().join('');
//  if(input == output){
//      console.log('palindrome hai')
//  }else{
//      console.log('palindrome nahi hai')
//  };





// let input = ['radar', 'khushboo', 'level', 'Raju'];

// let output = input.map(string => {
//    let reverse = string.split('').reverse().join('');
//     if(string == reverse ){
//        console.log('palindrome hai')  
//     } else {
//         console.log('palindrome nahi hai')
//     }
// });                                                                    




//  let palindrome = 'khushboo';

//  let output = palindrome.split('').reverse().join('');
//  if(palindrome === output){
//     console.log('palindrome hai')
//      } else {
//          console.log('palindrome nahi hai');
//      };




// let input = "my name is Raju";
// let substring = 'khushboo';

// if(input.includes(substring)){
//     console.log('substring hai')
// } else {
//     console.log('substring nahi hai')
// };



// let input = [1, 2, 2, 3, 5, 4, 1]

// let duplicates = [];
// let realNumbers = [];

// input.map(number => {
//   if(realNumbers.includes(number)){
//     duplicates.push(number);

//   } else {
//     realNumbers.push(number)
//     }
//   });
// console.log(duplicates);




// let input = [1, 2, 3, 4, 5];

// let output = input.reverse()
// console.log(output);





// let input = 'my name is khushboo'.split('');
// let vowels = ['a', 'e', 'i', 'o', 'u'];            

// let number = 0;
                                                    

// let names = [{firstName : 'pankaj', age : 20, height : 6}, 
//             {firstName : 'khushboo', age : 23, height : 3},
//             {firstName : 'Roshan', age : 18, height : 6}]
                                                

//   let sum = names.filter(name => {
//      if(name.height === 6){
//      return true
//      } else {
//       return false
//      } 
//  });
//      console.log(sum);
                                      




// let obj = 'my name is Raju'

// let sum = obj.replace('Raju', 'khushushboo');

// console.log(sum)








// function meraNam(name1 , nam2){
//     console.log('my name is ', name1, nam2 );
// }
// meraNam('khushboo', 'raju');











// const myName = (name) => {
//     return 'my name is '+ name
// }
//  let sum = myName('khushboo');
//  console.log(sum);












// const add = (num1, num2) => {
//     return num1 + num2
// };
// let sum = add(5 , 5);
// console.log(sum);






// const add = (num1, num2) => {
//     return num1 + num2
// };
// const sum = add(5, 15);



// const maltip = (num1, num2) => {
//     return num1 * num2
// };
// const num = maltip(4, 2);



// const subt = (num1,num2) => {
//     return num1 - num2
// };
// const sum1 = subt(6, 3);


// const dvgn = (num1, num2) => {
//     return num1 % num2
// };
// const num1 = dvgn(6, 5);



// console.log(sum, num, sum1, num1);



const sum = (num1, num2) => {
    const addition = num1 + num2;
    const sybtractoin = num1 - num2;
    const multiplicat = num1 * num2;
    const divisio = num1 / num2;

    console.log('Addition is: ', addition, sybtractoin, multiplicat, divisio);
};
sum(5, 10);