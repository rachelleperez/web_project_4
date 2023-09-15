export default class Api {
    constructor({ baseUrl, headers}) {
        this.baseUrl = baseUrl,
        this.headers = headers
    }

    _handleFetch (destinationUrl, method, body) {

        return fetch(destinationUrl, {
            method: method,
            headers: this.headers,
            body: body
        })
        .then(res => {
            if (res.ok) {
                return res.json()
                // test return
                    // .then(data => {
                    //     console.log('Data from API:', data);
                    //     return data;
                    // });
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

    addCard(data) {
        return this._handleFetch (`${this.baseUrl}/cards`, "POST", JSON.stringify({name: data.input_place_title ,link: data.input_place_image}));
    }

    updateProfile(data) {
        return this._handleFetch (`${this.baseUrl}/users/me`, "PATCH", JSON.stringify({name: data.input_profile_name ,about: data.input_profile_bio}));
    }

    deleteCard(cardId) {
        return this._handleFetch (`${this.baseUrl}/cards/${cardId}`, "DELETE");
    }

    updateAvatar(avatarLink) {
        return this._handleFetch (`${this.baseUrl}/users/me/avatar`, "PATCH", JSON.stringify({avatar: avatarLink}));
    }

    likeCard(cardId) {
        return this._handleFetch (`${this.baseUrl}/cards/${cardId}/likes`, "PUT");
    }

    unlikeCard(cardId) {
        return this._handleFetch (`${this.baseUrl}/cards/${cardId}/likes`, "DELETE");
    }

}