const input1 = 'the capital of';
const input2 = 'y';

const input = input1.replace(/ /g, '');
const start = input.indexOf(input2);
const end = input.lastIndexOf(input2);

const distinctChars = [];
for(let i = start + 1; i < end; i++){
    !distinctChars.includes(input.charAt(i))
    && input.charAt(i) !== input2 
    && distinctChars.push(input.charAt(i));
}

const result = distinctChars.length ? distinctChars.length : -1;
console.log(result)