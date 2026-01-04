import BasePage from "../BasePage";

export default class LoginPage extends BasePage{
    private readonly UserName = this.page.locator('[id="user-name"]');
    private readonly PassWord = this.page.locator('[id="password"]');
    private readonly Submit = this.page.locator('[id="login-button"]');

async EnterName(username:string) {
await this.EnterText(this.UserName,username);
}
async Pass(password:string) {
await this.EnterText(this.PassWord,password);
}

async PressLogin() {
await this.ClickOnElement(this.Submit);
}
}