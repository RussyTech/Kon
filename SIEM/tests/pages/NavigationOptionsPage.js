import { ClientFunction, Selector, t } from "testcafe";
import constants from "../utilities/constants";
import XPathSelector from "../utilities/xpath-selector";

const TimeSeriesAnalysisTab = XPathSelector("//*[text()='Time Series Analysis']")
const AvailablePropertySetsHeading = XPathSelector("//*[text()='Available Property Sets']")
const AlertingTab = XPathSelector("//*[text()='Alerting']")
const AssetHealthKeyHeading = XPathSelector("//*[text()='Asset Health Key']")
const ServiceLogTab = XPathSelector("//*[text()='Service Log']")
const CreatePostBtn = XPathSelector("//*[@aria-label='Create Post']")
const AdministrationTab = XPathSelector("//*[text()='Administration']")
const SearchHeading = XPathSelector("//*[text()='Search']")
const DismissBtn = XPathSelector("//*[text()='Dismiss']")

//Alerting 
const HistoryNav = XPathSelector("//*[text()='History']")
const NoAlertsNotification = XPathSelector("//*[text()='No alerts on the specified date']")
const ConfigurationNav = XPathSelector("//*[text()='Configuration']")
const AlertByAsset = XPathSelector("//*[text()='Asset Name']")
const ActiveAlertsTab = XPathSelector("//*[text()='Active Alerts']")

//ServiceLog
const ServiceLogNotification = XPathSelector("//*[text()='Service Log Notifications']")
const SelectUserDropDown = XPathSelector(".//*[@hint-text='Select User']")
const ActiveServiceLog = XPathSelector("//*[text()='Active Service Log']")

//Administration
const UserNav = XPathSelector("//*[text()='User']")
const OrgNav = XPathSelector("//*[text()='Org']")
const DataNav = XPathSelector("//*[text()='Data']")
const AssetNav = XPathSelector("//*[text()='Asset']")
const CreateBtn = XPathSelector("//*[@aria-label='Create']")

class NavigationOptionsPage{
    async DoTabNavigation()
    {
        const getLocation = ClientFunction(() => document.location.href)
        await t
        .click(TimeSeriesAnalysisTab)
        .expect(getLocation()).contains('Siemens_Time_Series_Analysis_Mashup')
        .expect(AvailablePropertySetsHeading.exists).ok()
        .click(AlertingTab)
        if(await DismissBtn.exists){
            await t
            .click(DismissBtn)
            .expect(getLocation()).contains('Siemens_Admin_Alerting_Home_Mashup')
            .expect(AssetHealthKeyHeading.exists).ok()
            .click(ServiceLogTab)
            .expect(getLocation()).contains('Siemens_Admin_ServiceLog_Home_Mashup')
            .expect(AssetHealthKeyHeading.exists).ok()
            .expect(CreatePostBtn.exists).ok()
            .click(AdministrationTab)
            .expect(getLocation()).contains('Siemens.Admin.Home')
            .expect(AssetHealthKeyHeading.exists).ok()
            .expect(SearchHeading.exists).ok()
        }else{
        await t
        .expect(getLocation()).contains('Siemens_Admin_Alerting_Home_Mashup')
        .expect(AssetHealthKeyHeading.exists).ok()
        .click(ServiceLogTab)
        .expect(getLocation()).contains('Siemens_Admin_ServiceLog_Home_Mashup')
        .expect(AssetHealthKeyHeading.exists).ok()
        .expect(CreatePostBtn.exists).ok()
        .click(AdministrationTab)
        .expect(getLocation()).contains('Siemens.Admin.Home')
        .expect(AssetHealthKeyHeading.exists).ok()
        .expect(SearchHeading.exists).ok()
        }
    }
    async NavToAlerting()
    {
        const getLocation = ClientFunction(() => document.location.href)
        await t
        .click(AlertingTab)
        if(await DismissBtn.exists){
            await t
            .click(DismissBtn)
        }else{
            await t
            .expect(getLocation()).contains('Siemens_Admin_Alerting_Home_Mashup')
        }
    }
    async AlertingNavigation()
    {
        await t 
        .click(HistoryNav)
        .expect(NoAlertsNotification.exists).ok()
        .click(ConfigurationNav)
        .expect(AlertByAsset.exists).ok()
        .click(ActiveAlertsTab)
        .expect(SearchHeading.exists).ok()
    }
    async NavToServiceLog()
    {
        const getLocation = ClientFunction(() => document.location.href)
        await t
        .click(ServiceLogTab)
        .expect(getLocation()).contains('Siemens_Admin_ServiceLog_Home_Mashup')
    }
    async ServiceLogNavigation()
    {
        await t 
        .click(ServiceLogNotification)
        .expect(SelectUserDropDown.exists).ok()
        .click(ActiveServiceLog)
        .expect(CreatePostBtn.exists).ok()
    }
    async NavToAdministration()
    {
        const getLocation = ClientFunction(() => document.location.href)
        await t
        .click(AdministrationTab)
        .expect(getLocation()).contains('Siemens.Admin.Home')
    }
    async AdministrationNavigation()
    {
        await t 
        .click(UserNav)
        .expect(CreateBtn.exists).ok()
        .click(OrgNav)
        .expect(CreateBtn.exists).ok()
        .click(DataNav)
        .click(AssetNav)
        .expect(SearchHeading.exists).ok()
    }
}
export default new NavigationOptionsPage()