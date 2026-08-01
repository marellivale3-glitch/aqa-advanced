function rectangleArea(width, height) {
    return width * height;
}

console.log(rectangleArea(5, 10));


const rectangleAreaExpression = function (width, height) {
    return width * height;
};

console.log(rectangleAreaExpression(5, 10));


const rectangleAreaArrow = (width, height) => {
    return width * height;
};

console.log(rectangleAreaArrow(5, 10));