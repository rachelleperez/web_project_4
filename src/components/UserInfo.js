// renders info about user on the page (e.g. like Card, for card info)

export default class UserInfo {

  constructor (userName, userBio) {
    this._userName = userName;
    this._userBio = userBio

    //elements with name and bio
    this._userNameEl = document.getElementById('display_profile_name')
    this._userBioEl = document.getElementById('display_profile_bio');

    //original setting when created
    this._renderUserInfo();
  }

  // returns an object with the information about the user. 
  // needed to know what to show when Edit Profile Modal/Popup is opened
  getUserInfo() {
    return { name: this._userNameEl.textContent, bio: this._userBioEl.textContent};
  }

  // takes new user data and adds it on the page 
  setUserInfo(userName, userBio) {
    //update variables for getUserInfo
    this._userName = userName;
    this._userBio = userBio

    //update what is being rendered
    this._renderUserInfo();
  }

  _renderUserInfo() {
    this._userNameEl.textContent = this._userName;
    this._userBioEl.textContent = this._userBio;
  }

}