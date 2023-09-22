import { Selector, t } from "testcafe";
import XPathSelector from "../utilities/xpath-selector";
import NavigationOptionsPage from "./NavigationOptionsPage";
import overviewPage from "./OverviewPage";

const OrgTypeDropdown = Selector("ptcs-dropdown");
const SelectAssetTypeListItem = Selector("ptcs-list").shadowRoot().find("div > ptcs-v-scroller > div > div > ptcs-list-item");
const OrgName = Selector("ptcs-textfield").nth(3).shadowRoot().find("div > div > span");
var Org_Name= "Test" + Math.floor(100000 + Math.random() * 900000);
const CreateOrgButton = Selector("ptcs-button").nth(13);
const CreateOrgConfirmationDialog = Selector("ptcs-confirmation-dialog").nth(-1).shadowRoot().find("#root > #dialog > div > div > ptcs-button#primary-button");
const DeleteConfirmatonYes =  Selector("ptcs-confirmation-dialog").shadowRoot().find("div > div > div > div > #primary-button");
const SearchBtnAdminConsoleOrgTab = Selector(".dhx_toolbar_shadow.toolbar-search-theming > div > div.dhx_toolbar_btn.dhxtoolbar_btn_def > input");
const OrgTableHeaders = Selector(".widget-content.widget-gridadvanced > .gridbox.gridbox_material.isModern > .xhdr > table.hdr > tbody > tr:nth-child(2) > td");
var OrgTableHeadersExpected = ["Node Name", "Area", "Organisation Type", "Location"];
const AdminConsoleNav = XPathSelector(".//*[text()='Admin Console']");
const AdminConsoleOrgTab = XPathSelector(".//*[text()='Org']");
const CreateOrgBtn = Selector("ptcs-button").nth(2);
const ExportBtn = Selector("#root_pagemashupcontainer-2_mashupcontainer-43_ptcsbutton-269").shadowRoot().find("div > div#label");
const PaginationTxt = Selector("ptcs-pagination").shadowRoot().find("#page-break-control-and-total-results-container");
const PaginationCarousel = Selector("ptcs-pagination").shadowRoot().find("#carousel");
const SearchResultsTableOrgName = Selector("div.objbox > table > tbody > tr:nth-child(2) > td:nth-child(2)");
const SearchFieldAssetTree = Selector("ptcs-textfield").nth(8).shadowRoot().find("div > div");
const CloseBtnOrgQuickAction= Selector("ptcs-button").nth(6);
const MoveBtnAssetQuickAction = Selector("ptcs-button").nth(7);
const SaveBtnAssetQuickAction = Selector("ptcs-button").nth(8);
const DeleteBtnAssetQuickAction = Selector("ptcs-button").nth(9);
const AssetDescQuickActions = Selector("ptcs-textfield").nth(5).shadowRoot().find("div > div > span > input");
const MoveBtnPopupQuickAction = Selector("ptcs-button").nth(11);
const StatusMessage = Selector(".status-msg");

class CreateAssetPage 
{
    async CreateOrg(orgType)
    {
        try{
         await t 
        .click(CreateOrgBtn)
        .typeText(OrgName, orgType+Org_Name)
        .click(OrgTypeDropdown)
        switch(orgType){
            case 'Monitoring Point':
                await t.click(SelectAssetTypeListItem.nth(0));
                break;
            case 'Area':
                await t.click(SelectAssetTypeListItem.nth(1));
                break;
            case 'Site':
                await t.click(SelectAssetTypeListItem.nth(2));
                break;
            case 'Customer':
                await t.click(SelectAssetTypeListItem.nth(3));
                break;
            default:
                 throw new Error(`Invalid value: ${orgType}`);
            }
       await t.click(CreateOrgButton)
        //.setNativeDialogHandler(() => true())
        //.click(CreateOrgConfirmationDialog)
        }catch(error){
            console.log(error);
        }
    }

    async VerifyAdminConsoleOrgTab()
    {
        try{
         await t 
         .click(AdminConsoleNav)
         .click(AdminConsoleOrgTab)
         .expect(CreateOrgBtn.hasAttribute('aria-label', 'Create')).ok('Create button exists')
         .expect(SearchBtnAdminConsoleOrgTab.exists).ok('Search field exists')
         .expect(ExportBtn.textContent).eql("Export")
         .expect(PaginationTxt.exists).ok()
         .expect(PaginationCarousel.exists).ok()
         for (var i = 0; i < 4; i++){
         await t.expect(OrgTableHeaders.nth(i).innerText).eql(OrgTableHeadersExpected[i])
        }
        
        }catch(error){
            console.log(error);
        }
    }

    async VerifySearchandCloseQuickAction(orgType)
    {
        try{
         await t 
         .typeText(SearchBtnAdminConsoleOrgTab, orgType+Org_Name, { replace: true })
         for (var i = 1; i <= SearchResultsTableOrgName.count; i++){
            await t.expect(SearchResultsTableOrgName.nth(i).innerText).eql(orgType+Org_Name)
            }
            await t
            .click(SearchResultsTableOrgName)
            .click(CloseBtnOrgQuickAction) 
        }catch(error){
            console.log(error);
        }
    }

    async DeleteAssetFunctionality()
    {
        try{
            await NavigationOptionsPage.Select_TestSiteDMSTreeOverviewPage()
            await t 
            .typeText(SearchBtnAdminConsoleOrgTab, AssetDescriptionText+"savechanges", { replace: true })
            .click(SearchResultsTableOrgName)
            .click(DeleteBtnAssetQuickAction)
            .setNativeDialogHandler(() => true())
            .click(DeleteConfirmatonYes)
        
        }catch(error){
            console.log(error);
        }
    }

    async CloseAssetFunctionality()
    {
        try{
         await t 
         .typeText(SearchBtnAdminConsoleOrgTab, AssetDescriptionText, { replace: true })
         .click(SearchResultsTableOrgName)
         .click(CloseBtnAssetQuickAction)
        
        }catch(error){
            console.log(error);
        }
    }

    //TBD
    async MoveAssetFunctionality()
    {
        try{
         await t 
         .typeText(SearchBtnAdminConsoleOrgTab, AssetDescriptionText+"savechanges", { replace: true })
         .click(SearchResultsTableOrgName)
         .click(MoveBtnAssetQuickAction)
         await NavigationOptionsPage.Select_TestSiteDMS()
         await t
         .click(MoveBtnPopupQuickAction)
         .setNativeDialogHandler(() => true())
         .click(CreateOrgConfirmationDialog)
         .expect(StatusMessage.innerText).contains("successfully")
        }catch(error){
            console.log(error);
        }
    }

    async SaveChangesAssetQuickActionsFunctionality()
    {
        try{
         await t 
         .typeText(SearchBtnAdminConsoleOrgTab, AssetDescriptionText, { replace: true })
         .click(SearchResultsTableOrgName)
         .typeText(AssetDescQuickActions, AssetDescriptionText+"savechanges",{ replace: true })
         .click(SaveBtnAssetQuickAction)
         .click(CloseBtnAssetQuickAction)
        //popup success message to be captured
        }catch(error){
            console.log(error);
        }
    }

    async EnterSearchNodeOverviewPage(){
        await t
        .typeText(SearchFieldAssetTree, AssetDescriptionText, { replace: true });
    }
}
export default new CreateAssetPage()