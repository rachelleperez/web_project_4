export default class Api {
    constructor({ baseUrl, headers}) {
        this.baseUrl = baseUrl,
        this.headers = headers
    }

    _handleFetch (destinationUrl, method) {

        // //an api works
        // const url = 'https://api.kanye.rest/';
        // fetch(url)
        // .then(response => response.json())
        // .then(data => {
        //     console.log(data.quote);
        // })
        // .catch(error => console.error(error));

        // // test - correct destination url and method
        // console.log(destinationUrl);
        // console.log(method);


        return fetch(destinationUrl, {
            method: method,
            headers: this.headers,
            //body: JSON.stringify(data)
        })
        .then(res => {
            if (res.ok) {
                return res.json()
                // test return
                    .then(data => {
                        console.log('API Response Data:', data);
                        return data;
                    });
            }
            // if the server returns an error, reject the promise
            return Promise.reject(`Error: ${res.status}`);
            })
        .catch((err) => {
            console.error(err); // log the error to the console
            });
    }

    getInitialCards() {
        return this._handleFetch (`${this.baseUrl}/cards`, "GET");
    }

    getUserInfo() {
        return this._handleFetch (`${this.baseUrl}/users/me`, "GET");
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