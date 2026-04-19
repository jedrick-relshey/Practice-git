let numbers = [1,2,3,7,4,5];
let i = 0;
let largest = numbers[0];

while (i < numbers.length) {
    if (numbers[i] > largest) {
        largest = numbers[i];
    }
    i++;
} 
console.log(largest);
