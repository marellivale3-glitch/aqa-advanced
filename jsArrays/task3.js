const numbers = [10, 20, 30, 40, 50];

const sum = numbers.reduce(function(total, element) {
    return total + element;
}, 0);

console.log(sum);