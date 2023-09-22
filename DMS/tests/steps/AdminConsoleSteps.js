import { Selector } from "testcafe";
import constants from "../utilities/constants"; 
import NavigationOptionsPage from "../pages/NavigationOptionsPage"
import LoginPage from "../pages/LoginPage"
import AdminConsolePage from "../pages/AdminConsolePage";

fixture `Create Asset Test`
.page `${constants.consts.url}`

test('Create Asset', async (t) =>{
    await LoginPage.DoLogin()
    await NavigationOptionsPage.Select_Aggr() 
    await AdminConsolePage.VerifyAdminConsoleAssetTab()
    await NavigationOptionsPage.NavigatetoCreateAssetPage()
    await AdminConsolePage.CreateAsset()
    await AdminConsolePage.VerifySearchFunctionality()
    await AdminConsolePage.CloseAssetFunctionality()
    await AdminConsolePage.SaveChangesAssetQuickActionsFunctionality()
    await AdminConsolePage.MoveAssetFunctionality()
    await AdminConsolePage.DeleteAssetFunctionality()
    await LoginPage.DoSignOut()
})