export default class UserInfo {
    constructor (userNameSelector, userDetailsSelector) {
      this._userName = userNameSelector
      this._userDetails = userDetailsSelector
    }
  
    getUserInfo () {
      return {
        name: this._userName.textContent,
        details: this._userDetails.textContent
      }
    }
  
    setUserInfo (info) {
      this._userName.textContent = info.name
      this._userDetails.textContent = info.details
    }
  }