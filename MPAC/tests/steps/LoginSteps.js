import { Selector } from "testcafe";
import constants from "../utilities/constants"; 
import LoginPage from "../pages/LoginPage"

fixture `Log In Test`
.page `${constants.consts.url}`

test('Successful Login and Logout', async (t) =>{
    await LoginPage.DoLogin()
    await LoginPage.DoLogOut()
})