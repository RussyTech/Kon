import { Selector } from "testcafe";
import constants from "../utilities/constants"; 
import NavigationOptionsPage from "../pages/NavigationOptionsPage"
import LoginPage from "../pages/LoginPage"
import TreeNav from "../pages/TreeNav"
import OverviewPage from "../pages/OverviewPage"
import ServiceLogPage from "../pages/ServiceLogPage";

fixture `Service Log Functions`
.page `${constants.consts.url}`

test('Create Service Log', async (t) =>{
    await LoginPage.DoLogin()
    await TreeNav.SelectAsset_AggregateIndustry()
    await NavigationOptionsPage.NavToServiceLog()
    await ServiceLogPage.CreateServiceLogPost()
    //await LoginPage.DoSignOut()
})