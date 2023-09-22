import { ClientFunction, Selector, t } from "testcafe";
import constants from "../utilities/constants";
import XPathSelector from "../utilities/xpath-selector";
import AdminConsolePage from "./AdminConsolePage";

const ActiveAlertRole = XPathSelector(".//*[text()='08/12/2022 09:54:21']")
const ActiveAlertRole2 = XPathSelector(".//*[text()='CrestFactor_X']")
const OverviewNavBar = XPathSelector(".//*[text()='Overview']")

const ShowFullScreenBtn = XPathSelector(".//*[@aria-label='SHOW FULL SCREEN']")
const GraphShowFullScreen = XPathSelector(".//*[text()='02. C104 -Head Shaft Bearing Non Drive Side (High Tension)']")

const GraphPopUp = XPathSelector(".//*[@class='mashup-close-popup']")
const SearchedAsset = Selector(".obj.row20px > tbody > tr .renderer-true-default");
const AssetSelected = Selector("ptcs-label").nth(21);


class OverviewPage
{
    async CloseGraphPopUp()
    {
        await t
        .click(GraphPopUp)
        .expect(ActiveAlertRole.exists).ok()
    }

    async SelectActiveAlertRole()
    {
        await t
        .wait(1000)
        if (await ActiveAlertRole.exists)
        {
            await t
            .click(ActiveAlertRole)
        }else if(await ActiveAlertRole2.exists)
        {
            await t
            .wait(5000)
            .click(ActiveAlertRole2)
        }else{
            return true
        }
    }

    async SelectShowFullScreenBtn()
    {
        await t
        .click(ShowFullScreenBtn)
    }

    async ConfirmGraphFullScreen()
    {
        await t
        .expect(GraphShowFullScreen.exists).ok()
    }

    async ValidateTreeSearchForAsset()
    {
        await t
        .click(SearchedAsset)
        .expect(SearchedAsset.textContent).eql(AdminConsolePage.AssetDescriptionText)
        .click(OverviewNavBar)
    }

    async ValidateAssetViewonOverviewPage(){
        await t
        .expect(AssetSelected.innerText).eql(AssetDescriptionText)
    }
}
export default new OverviewPage()