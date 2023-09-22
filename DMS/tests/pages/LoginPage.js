import { ClientFunction, Selector, t } from "testcafe";
import constants from "../utilities/constants";
import XPathSelector from "../utilities/xpath-selector";

const usernameTxt = XPathSelector(".//*[@name='thingworx-form-userid']")
const passwordTxt = XPathSelector(".//*[@name='thingworx-form-password']")
const loginBtn = XPathSelector(".//*[@value='Submit']")

const LogoutBtn = XPathSelector(".//*[text()='Sign Out']")
const YesConfirm = XPathSelector(".//*[text()='Yes']")

class LoginPage {
    async DoLogin()
    {
        await t.maximizeWindow()
        await t 
        .typeText(usernameTxt, constants.consts.userName)
        .typeText(passwordTxt, constants.consts.password)
        .click(loginBtn)
    }

    async DoSignOut()
    {
        await t
        .click(LogoutBtn)
        .click(YesConfirm)
    }
}
export default new LoginPage()