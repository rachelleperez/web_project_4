export default class UserInfo {
    constructor({ name, bio, avatar }) { // OR className instead of selector
        this._name = document.getElementById(`${name}`);
        this._bio = document.getElementById(`${bio}`);
        this._avatar = document.getElementById(`${avatar}`);
    }

    getUserInfo() {
        const user = {
            name: this._name.textContent,
            bio: this._bio.textContent,
            avatar: this._avatar
        }
        return user
    }

    setUserInfo(nameText, bioText, avatarLink) {
        this._name.textContent = nameText;
        this._bio.textContent = bioText;
        this._avatar.src = avatarLink;
    }

    setAvatar(avatarLink) {
        this._avatar = avatarLink;
    }

}