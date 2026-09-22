function handleEven () {
    console.log('Even number');
}

function handleOdd () {
    console.log('Odd number');
}

function handleNum (number,handleEven, handleOdd) {
    if (number % 2 === 0) {
        handleEven();
    } else {
        handleOdd();
    }
}

handleNum(8, handleEven, handleOdd);