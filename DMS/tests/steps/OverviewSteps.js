import { Selector } from "testcafe";
import constants from "../utilities/constants"; 
import NavigationOptionsPage from "../pages/NavigationOptionsPage"
import LoginPage from "../pages/LoginPage"
import TreeNav from "../pages/TreeNav"
import OverviewPage from "../pages/OverviewPage"
import AdminConsolePage from "../pages/AdminConsolePage";

fixture `Log In Test`
.page `${constants.consts.url}`

/*test('CTEST-2303 - Asset View - Verify Headlines tab - Navigate to Properties comparison page', async (t) =>{
    await LoginPage.DoLogin()
    await TreeNav.SelectAsset_AggregateIndustry()
    await OverviewPage.SelectActiveAlertRole()
    await OverviewPage.SelectShowFullScreenBtn()
    await OverviewPage.ConfirmGraphFullScreen()
    await OverviewPage.CloseGraphPopUp()
    await LoginPage.DoSignOut()
})*/

test('CTEST-2460 - Verify Overview section - Select Asset', async (t) =>{
    await LoginPage.DoLogin()
    await NavigationOptionsPage.Select_Aggr() 
    await AdminConsolePage.VerifyAdminConsoleAssetTab()
    await NavigationOptionsPage.NavigatetoCreateAssetPage()
    await AdminConsolePage.CreateAsset()
    await AdminConsolePage.EnterSearchNodeOverviewPage()
    await AdminConsolePage.CloseAssetFunctionality();
    await AdminConsolePage.SaveChangesAssetQuickActionsFunctionality()
    await AdminConsolePage.MoveAssetFunctionality()
    await AdminConsolePage.DeleteAssetFunctionality();
    await OverviewPage.ValidateTreeSearchForAsset()
    await LoginPage.DoSignOut()
})