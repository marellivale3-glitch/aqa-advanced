function printAfterDelay(text, milliseconds) {
    setTimeout(() => {
        console.log(text);
    }, milliseconds);
}

printAfterDelay("Hello", 1000);