class Auth {
  constructor() {
    this.authenticated = false;
  }

  login(user, pass) {
    if (user === "sergio" && pass === "123") {
      this.authenticated = true;
    } else {
      this.authenticated = false;
    }
  }

  logout(cb) {
    this.authenticated = false;
    cb();
  }

  isAuthenticated() {
    return this.authenticated;
  }
}

export default new Auth();
