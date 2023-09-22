import { ClientFunction, Selector, t } from "testcafe";
import constants from "../utilities/constants";
import XPathSelector from "../utilities/xpath-selector";


const AlvanceBritishAluminium = XPathSelector(".//*[text()='Alvance British Aluminium']")
const AlertLocation = XPathSelector(".//*[text()='Alert Location']")
const AlertLocationMapExists = Selector("#0C9A67FF-FF08-41F3-B73D-15FD6C8AE166").exists
const AlertFocus = XPathSelector(".//*[text()='Alert Focus']")
const ViewSpectrsBtn = XPathSelector(".//*[@id='root_pagemashupcontainer-2_mashupcontainer-50_mashupcontainer-64_ptcsbutton-20']")
const DateDropDown = XPathSelector(".//*[@id='root_pagemashupcontainer-2_mashupcontainer-50_mashupcontainer-71_ptcsdropdown-23']")


const TreeNavSearchBox =XPathSelector(".//*[@id='root_mashupcontainer-6_ptcstextfield-152-bounding-box']//*[@id='root_mashupcontainer-6_ptcstextfield-152']")
const SearchResult = XPathSelector(".//*[text()='01. C104 - Head Shaft Bearing Drive Side']")
const SearchResultContainer = XPathSelector(".//*[@id='root_mashupcontainer-6_List-58-dhxlist']")
const SearchResultWithTxt = SearchResultContainer.find('div')

const part = XPathSelector(".//*[@part='text-box']")
const shadowInput = Selector(() => document.querySelector('#root_mashupcontainer-6_ptcstextfield-152-bounding-box').shadowRoot.querySelector('#root_mashupcontainer-6_ptcstextfield-152'));

const shadowRoot = Selector('ptcs-textfield').withAttribute('part', 'text-box').shadowRoot();

const Open1 = XPathSelector("//*[@id='root_mashupcontainer-6_Tree-7']/div/table/tbody/tr[2]/td[2]/table/tbody/tr[10]/td[2]/table/tbody/tr[1]/td[1]/div")
const Open2 = XPathSelector("//*[@id='root_mashupcontainer-6_Tree-7']/div/table/tbody/tr[2]/td[2]/table/tbody/tr[10]/td[2]/table/tbody/tr[2]/td[2]/table/tbody/tr[1]/td[1]/div")
const Open2Select = XPathSelector("//*[@id='root_mashupcontainer-6_Tree-7']/div/table/tbody/tr[2]/td[2]/table/tbody/tr[10]/td[2]/table/tbody/tr[2]/td[2]/table/tbody/tr[2]/td[2]/table/tbody/tr/td[4]/span/span")

const accFreqRadio = XPathSelector(".//*[@id='root_ptcstogglebutton-78']")
const velWaveRadio = XPathSelector(".//*[@id='root_ptcstogglebutton-76']")
const velFreqRadio = XPathSelector(".//*[@id='root_ptcstogglebutton-77']")

const SelectReadingsBtn = XPathSelector(".//*[@id='root_ptcsbutton-124']")
const ReadingDateTxt = XPathSelector(".//*[@id='root_ptcsdatepicker-125']")
const EightDec = XPathSelector(".//*[@id='days']/div[11]")

//Navigation
const ManageTeamNav = XPathSelector(".//*[text()='Manage Teams']")
const MTCreateBtn = Selector("#root_pagemashupcontainer-2_ptcsbutton-123")
const AdminConsoleNav = XPathSelector(".//*[text()='Admin Console']")
const ACCreateBtn = Selector("#root_pagemashupcontainer-2_mashupcontainer-43_ptcsbutton-152")
const ServiceLog = XPathSelector(".//*[text()='Service Log']")
const SLCreateBtn = Selector("#root_pagemashupcontainer-2_mashupcontainer-43_ptcsbutton-131")
const AlertConfig = XPathSelector(".//*[text()='Alert Configuration']")
const ACExportBtn = Selector("#root_pagemashupcontainer-2_mashupcontainer-10_ptcsbutton-193")
const OverviewNav = XPathSelector(".//*[text()='Overview']")
const OVDate = XPathSelector(".//*[text()='Last 24 Hours']")
const AggregateIndustryNode = XPathSelector(".//*[text()='Aggregate Industries']")
const TestSiteDMSNodeTree = XPathSelector(".//*[text()='TestSiteDMS']")
const TestSiteDMSNode = Selector("table > tbody > tr:nth-child(2) > td:nth-child(2) > table > tbody > tr:nth-child(220) > td:nth-child(2) > table > tbody > tr:nth-child(1)").nth(1)

let url = ''

class NavigationOptionsPage {
    async DoTabNavigation()
    {
        const getLocation = ClientFunction(() => document.location.href)
        await t
        .click(ManageTeamNav)
        .expect(MTCreateBtn.exists).ok()
        .expect(getLocation()).contains('invma_Admin_User_Management_Mashup')
        .click(AdminConsoleNav)
        .expect(ACCreateBtn.exists).ok()
        .expect(getLocation()).contains('AssetMinder_Admin_Home_mashup')
        .click(ServiceLog)
        .expect(SLCreateBtn.exists).ok()
        .expect(getLocation()).contains('AssetMinder_Admin_ServiceLog_Home_Mashup')
        .click(AlertConfig)
        .expect(ACExportBtn.exists).ok()
        .expect(getLocation()).contains('AssetMinder.Alerting.AlertConfiguration.mashup')
        .click(OverviewNav)
        .expect(getLocation()).contains('AssetMinder_AssetOverview_DashboardSelector_Mashup')
    }
    async NavToServiceLog()
    {
        await t
        .click(ServiceLog)
    }
    
    async SelectReadingDate()
    {
        await t
        .click(ReadingDateTxt)
        .wait(2000)
        .click(EightDec)
    }
    async DoTreeSearch()
    {
        await t 
        .wait(10000)
        .click(Open1)
        .wait(5000)
        .click(Open2)
        .wait(5000)
        .click(Open2Select)
    }
    async ToggleSpectraType()
    {
        await t 
        .click(accFreqRadio)
        .click(velWaveRadio)
        .click(velFreqRadio)
    }
    async SwitchToNewWindow()
    {

    }

    async SelectReedingsBtn()
    {
        await t
        .click(SelectReadingsBtn)
    }
    async WindowHandle()
    {
        url = await t.eval(() => document.documentURI)
        console.log('Spectral URL: '+ url)
        await t.expect(url).contains('https://testapp.assetminder.io/Thingworx/Runtime/index.html#master')

        //const InitialWindow = await t.getCurrentWindow()
        //await t.openWindow('')

        url = await t.eval(() => document.documentURI)
        console.log('Spectral URL: '+ url)
        await t.expect(url).contains('https://testapp.assetminder.io/Thingworx/Runtime/index.html#mashup')

        // const window2 = await t.getCurrentWindow()
        // await t.switchToWindow(window2)
        // await t.maximizeWindow()
    }
    async Select_Aggr()
    {
        await t 
        .click(AggregateIndustryNode)
        .wait(2000)
    }
    
    async Select_TestSiteDMS()
    {
        await t 
        .click(TestSiteDMSNode)
        .wait(2000)
    }

    async Select_TestSiteDMSTreeOverviewPage()
    {
        await t 
        .click(TestSiteDMSNodeTree)
        .wait(2000)
    }
    
    async SelectDateRangeDropDown()
    {
        await t
        .click(DateDropDown)
    }
    async SelectViewSpectraBtn()
    {
        await t
        .click(ViewSpectrsBtn)
    }
    async ReloadPage()
    {
        await t.eval(() => location.reload(true))
    }
    async ConfirmAlertLocationPreviewPane()
    {
        await t
        .wait(5000)
        .expect(AlertLocation.textContent).contains('Alert Location')
        .expect(AlertFocus.textContent).contains('Alert Location')
        .expect(AlertLocationMapExists).ok()
    }

    async NavigatetoCreateAssetPage(){
        await t
        .click(AdminConsoleNav)
        .click(ACCreateBtn)
    }

    async NavigatetoAdminConsoleVerifyFields(){
        await t
        .click(AdminConsoleNav)
        .expect(NavigationOptionsPage.ACCreateBtn.exists).ok('Create button exists')
        .expect(SearchButtonAdminConsoleAssetTab.exists).ok('Search field exists')
    }
}
export default new NavigationOptionsPage()