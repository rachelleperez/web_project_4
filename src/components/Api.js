export default class Api {
    constructor({ baseUrl, headers}) {
        this.baseUrl = baseUrl,
        this.headers = headers
    }

    getInitialCards() {
        return fetch(`${this.baseUrl}/cards`, {
            method: 'GET',
            headers: this.headers
        })
        .then(res => {
            if (res.ok) {
                return res.json();
            }
            // if the server returns an error, reject the promise
            return Promise.reject(`Error: ${res.status}`);
            })
        .catch((err) => {
            console.error(err); // log the error to the console
            });
    }
 


  // other methods for working with the API

  // Promise.all

}

// template > how to use this class
// const api = new Api({
//   baseUrl: "https://around-api.en.tripleten-services.com/v1",
//   headers: {
//     authorization: "1412012d-ba61-4d75-b55a-14504d6e23ae",
//     "Content-Type": "application/json"
//   }
// });