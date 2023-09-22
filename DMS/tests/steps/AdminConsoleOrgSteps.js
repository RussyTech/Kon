import { Selector } from "testcafe";
import constants from "../utilities/constants"; 
import NavigationOptionsPage from "../pages/NavigationOptionsPage"
import LoginPage from "../pages/LoginPage"
import AdminConsoleOrgPage from "../pages/AdminConsoleOrgPage";

fixture `Create Asset Test`
.page `${constants.consts.url}`

test('Create Area', async (t) =>{
    await LoginPage.DoLogin()
    await NavigationOptionsPage.Select_Aggr() 
    await AdminConsoleOrgPage.VerifyAdminConsoleOrgTab()
    //await AdminConsoleOrgPage.CreateOrg("Monitoring Point")
    await AdminConsoleOrgPage.CreateOrg("Area")
    //await AdminConsoleOrgPage.CreateOrg("Site")
    //await AdminConsoleOrgPage.CreateOrg("Customer")
    await AdminConsoleOrgPage.VerifySearchandCloseQuickAction("Area")
    await LoginPage.DoSignOut()
})