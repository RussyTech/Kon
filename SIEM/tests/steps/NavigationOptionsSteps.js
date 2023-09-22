import { Selector } from "testcafe";
import constants from "../utilities/constants"; 
import NavigationOptionsPage from "../pages/NavigationOptionsPage"
import LoginPage from "../pages/LoginPage"
// import TreeNav from "../pages/TreeNav"
// import OverviewPage from "../pages/OverviewPage"

fixture `Navigation Options`
.page `${constants.consts.url}`

.beforeEach(async t =>{
    await LoginPage.DoLogin()
})
.afterEach(async t => {
    await LoginPage.DoSignOut()
})

test('Confirm Tab Navigation Options', async (t) =>{
    await NavigationOptionsPage.DoTabNavigation()
})
test('Confirm Alerting navigation', async (t) =>{
    await NavigationOptionsPage.NavToAlerting()
    await NavigationOptionsPage.AlertingNavigation()
})
test('Confirm Service Log Navigation', async(t) =>{
    await NavigationOptionsPage.NavToServiceLog()
    await NavigationOptionsPage.ServiceLogNavigation()
})
test('Confirm Administration navigation', async(t) =>{
    await NavigationOptionsPage.NavToAdministration()
    await NavigationOptionsPage.AdministrationNavigation()
})