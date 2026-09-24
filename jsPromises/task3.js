async function fetchData() {
    const response = await fetch(
        'https://jsonplaceholder.typicode.com/todos/1'
    );

    const data = await response.json();

    return data;
}

async function fetchUser() {
    const response = await fetch(
        'https://jsonplaceholder.typicode.com/users/1'
    );

    const data = await response.json();

    return data;
}

async function runPromises() {
    try {
        const allResult = await Promise.all([
            fetchData(),
            fetchUser()
        ]);

        console.log('Promise.all result:', allResult);

        const raceResult = await Promise.race([
            fetchData(),
            fetchUser()
        ]);

        console.log('Promise.race result:', raceResult);

    } catch (error) {
        console.error('Error:', error);
    }
}

runPromises();