import { ClientFunction, Selector, t } from "testcafe";
import constants from "../utilities/constants";
import XPathSelector from "../utilities/xpath-selector";

const AggregateIndustryNode = XPathSelector(".//*[text()='Aggregate Industries']")
const AlvanceBritishAluminium = XPathSelector(".//*[text()='Alvance British Aluminium']")
const ActiveAlertRole = XPathSelector(".//*[text()='08/12/2022 09:54:21']")
const ActiveAlertRole2 = XPathSelector(".//*[text()='CrestFactor_X']")

class TreeNav
{
    async SelectAsset_AggregateIndustry()
    {
        await t
        const getLocation = ClientFunction(() => document.location.href)
        await t
            .expect(getLocation()).contains('AssetMinder_General_Master&mashup')
            .click(AggregateIndustryNode)
            .wait(2000)
        if (await ActiveAlertRole.exists)
        {
            await t .expect(ActiveAlertRole.exists).ok()
        }
        else if ((ActiveAlertRole.exists).ok(false))
        {
            await t 
                .click(AlvanceBritishAluminium)
                .wait(2000)
                .click(AggregateIndustryNode)
                .wait(200)
                .expect(ActiveAlertRole.exists)
        }
        else
        {
            await t 
                .click(AggregateIndustryNode)
                .wait(2000)
        }
        
    }

}
export default new TreeNav()