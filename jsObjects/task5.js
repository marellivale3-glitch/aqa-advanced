const users= [
    { name: "Alice", age: 25 },
    { name: "Harry", age: 30 },
    { name: "Andy", age: 35 },
];

for (const { name, age } of users) {
    console.log(name, age);
}