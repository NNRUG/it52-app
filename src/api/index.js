// Api functions should return a promise that resolves to normalized data
// All data normalization goes here

export function getEvents() {
    return fetch('https://www.it52.info/api/v1/events', {
        method: 'GET',
        headers: {
            'Accept': 'application/json'
        }
    }).then(response =>  // return both data and response code
        response.json().then(json => ({
            events: json,
            status: response.status
        }))
    );
}
