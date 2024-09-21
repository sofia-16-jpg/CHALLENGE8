function getEvenNumbers(arr) {
    return arr.filter(num => num % 2 === 0);
}

// Example 
const nembres = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbers = getEvenNumbers(nembres);
console.log(evenNumbers);
//second question
const people = [
    { name: "sofia", age: 18, email: "sophiahallel35@gmail.com" },
    { name: "salma", age: 19, email: "salmazegar@gmail.com" },
    { name: "serine", age: 19, email: "serinebeloua@gmail.com" },
    { name: "amina", age: 17, email: "aminazegar@gmail.com" },
];
function filterOver30(personArray) {
    return personArray.filter(person => person.age > 30);
}
const over30 = filterOver30(people);
console.log(over30);
//Implement a stack data structure in JavaScript using an array.
const stack = new stack();
stack.push(10);
stack.push(20);
stack.push(30);
stack.print(); 
console.log(stack.peek()); 
console.log(stack.pop());
console.log(stack.isEmpty());
stack.print(); 
//Implement a queue data structure in JavaScript using an array.
let queue= []
//Add 4 elements to the queue.
queue.push('serine')
queue.push('salma')
queue.push('amina')
queue.push('sofia')
//Remove the elements from the queue:
let firstOut=queue.shift()
//Function to find if the queue is empty.
function isEmpty(queue){
  return queue.length===0
}
console.log(isEmpty(queue))
//vowels removed
function removeVowels(str) {
    return str.replace(/[aeiouAEIOU]/g, '');
}

// Example 
const inputString = "sofia, hallel!";
const resultString = removeVowels(inputString);
console.log(resultString); // Output: "sf, hlll!"
function mergeUnique(arr1, arr2) {
    // Combine both arrays
    const combined = arr1.concat(arr2);
    // Filter out duplicates
    const unique = [];
    for (const num of combined) {
        if (!unique.includes(num)) {
            unique.push(num);
        }
    }
    return unique;
}


