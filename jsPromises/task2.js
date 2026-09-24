function getTodo() {
    return fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to fetch todo');
            }

            return response.json();
        });
}

function getUser() {
    return fetch('https://jsonplaceholder.typicode.com/users/1')
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to fetch user');
            }

            return response.json();
        });
}


// Promise.all
const allPromises = Promise.all([
    getTodo(),
    getUser()
]);

allPromises
    .then(results => {
        console.log('Promise.all result:', results);
    })
    .catch(error => {
        console.error('Promise.all error:', error);
    });


// Promise.race
const racePromise = Promise.race([
    getTodo(),
    getUser()
]);

racePromise
    .then(result => {
        console.log('Promise.race result:', result);
    })
    .catch(error => {
        console.error('Promise.race error:', error);
    });