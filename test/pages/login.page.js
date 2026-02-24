const BasePage = require('./base.page');

class LoginPage extends BasePage {

  get username() { return $('#user-name'); }
  get password() { return $('#password'); }
  get loginBtn() { return $('#login-button'); }
  get error() { return $('h3[data-test="error"]'); }
  get title() { return $('.app_logo'); }

  open() {
    super.open('/');
  }

  async login(user, pass){
    await this.username.setValue(user);
    await this.password.setValue(pass);
    await this.loginBtn.click();
  }
}

module.exports = new LoginPage();