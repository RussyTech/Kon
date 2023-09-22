import { Selector } from "testcafe";
import constants from "../utilities/constants"; 
import NavigationOptionsPage from "../pages/NavigationOptionsPage"
import LoginPage from "../pages/LoginPage"
import TreeNav from "../pages/TreeNav"
import OverviewPage from "../pages/OverviewPage"

fixture `Navigation Options`
.page `${constants.consts.url}`

test('Confirm Tab Navigation Options', async (t) =>{
    await LoginPage.DoLogin()
    await NavigationOptionsPage.DoTabNavigation()
    await LoginPage.DoSignOut()
})

test.skip('Navigate To Vibration Analysis Page', async (t) =>{
    await LoginPage.DoLogin()
    await NavigationOptionsPage.SelectAsset_AggregateIndustry()
    await t.wait(3000)
    await t.eval(() => location.reload(true))
    await t.wait(5000)
   
    await NavigationOptionsPage.SelectActiveAlertRole()
    //await NavigationOptionsPage.SelectDateRangeDropDown()
    //await NavigationOptionsPage.SelectViewSpectraBtn()
    await t.wait(2000)
    //await t.maximizeWindow()
    //await t.switchToWindow(({url}) => url.pathname === '/https://testapp.assetminder.io/Thingworx/Runtime/index.html#mashup')
    // await t.switchToWindow(data =>{
    //     return data.url.hostname === '/testapp.assetminder.io/Thingworx/Runtime/index.html#mashup'
    // })
    await t
    .navigateTo(constants.mashUpWindow.AssetUrl)
    //.switchToParentWindow()

    await t.wait(3000)
    //await t.switchToWindow(w => w.url.host === 'https://testapp.assetminder.io/Thingworx/Runtime/index.html#mashup')
    //await t.maximizeWindow()
    await NavigationOptionsPage.SelectReedingsBtn()
    await t.wait(3000)
    await NavigationOptionsPage.ToggleSpectraType()
    await NavigationOptionsPage.SelectReadingDate()
    //await NavigationOptionsPage.WindowHandle()
    // await t.maximizeWindow()
    //AssetMinder_DynamicFFTCharts_Mas 
})
