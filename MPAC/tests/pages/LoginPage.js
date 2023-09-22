import { ClientFunction, Selector, t } from "testcafe";
import constants from "../utilities/constants";
import XPathSelector from "../utilities/xpath-selector";

const loginUserName = XPathSelector("//*[@name='thingworx-form-userid']")
const loginPassword = XPathSelector("//*[@name='thingworx-form-password']")
const loginBtn = XPathSelector("//*[@type='submit']")
const profileMenu = XPathSelector(".//*[@class='css-1rgy1dx']//*[contains(@class, 'MuiButtonBase-root MuiIconButton-root')]")
const logoutList = XPathSelector(".//*[text()='Log out']")


class LoginPage{
    async DoLogin()
    {
        await t
        .typeText(loginUserName, constants.consts.userName)
        .typeText(loginPassword, constants.consts.password)
        .click(loginBtn)
    }
    async DoLogOut()
    {
        await t
        .click(profileMenu)
        .click(logoutList)
    }
}
export default new LoginPage()