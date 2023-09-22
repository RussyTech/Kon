import { Selector, t } from "testcafe";
import XPathSelector from "../utilities/xpath-selector";
import NavigationOptionsPage from "./NavigationOptionsPage";
import overviewPage from "./OverviewPage";

const AssetTypeDropdown = Selector("ptcs-dropdown");
const SelectAssetTypeListItem = Selector("ptcs-list").shadowRoot().find("div > ptcs-v-scroller > div > div > ptcs-list-item");
const AssetDescription = Selector("ptcs-textfield").nth(10).shadowRoot().find("div > div > span");
var AssetDescriptionText= "TestAsset" + Math.floor(100000 + Math.random() * 900000);
const CreateAssetButton = Selector("ptcs-button").nth(12);
const CreateAssetConfirmationDialog = Selector("ptcs-confirmation-dialog").nth(-1).shadowRoot().find("#root > #dialog > div > div > ptcs-button#primary-button");
const DeleteConfirmatonYes =  Selector("ptcs-confirmation-dialog").shadowRoot().find("div > div > div > div > #primary-button");
const SearchButtonAdminConsoleAssetTab = Selector(".dhx_toolbar_shadow.toolbar-search-theming > div > div.dhx_toolbar_btn.dhxtoolbar_btn_def > input");
const AssetTableHeaders = Selector(".widget-content.widget-gridadvanced > .gridbox.gridbox_material.isModern > .xhdr > table.hdr > tbody > tr:nth-child(2) > td");
var AssetTableHeadersExpected = ["Asset Name", "Owner", "Belongs To", "Model Number", "Serial Number"];
const AdminConsoleNav = XPathSelector(".//*[text()='Admin Console']");
const CreateAssetBtn = Selector("#root_pagemashupcontainer-2_mashupcontainer-43_ptcsbutton-152");
const ExportBtn = Selector("#root_pagemashupcontainer-2_mashupcontainer-43_ptcsbutton-113").shadowRoot().find("div > div#label");
const PaginationTxt = Selector("ptcs-pagination").shadowRoot().find("#page-break-control-and-total-results-container");
const PaginationCarousel = Selector("ptcs-pagination").shadowRoot().find("#carousel");
const SearchResultsTableAssetNameDesc = Selector("div.objbox > table > tbody > tr:nth-child(2) > td:nth-child(2)");
const SearchFieldAssetTree = Selector("ptcs-textfield").nth(8).shadowRoot().find("div > div");
const CloseBtnAssetQuickAction= Selector("ptcs-button").nth(6);
const MoveBtnAssetQuickAction = Selector("ptcs-button").nth(7);
const SaveBtnAssetQuickAction = Selector("ptcs-button").nth(8);
const DeleteBtnAssetQuickAction = Selector("ptcs-button").nth(9);
const AssetDescQuickActions = Selector("ptcs-textfield").nth(5).shadowRoot().find("div > div > span > input");
const MoveBtnPopupQuickAction = Selector("ptcs-button").nth(11);
const StatusMessage = Selector(".status-msg");

class CreateAssetPage 
{
    async CreateAsset()
    {
        try{
         await t 
        .click(AssetTypeDropdown)
        .click(SelectAssetTypeListItem)
        .typeText(AssetDescription, AssetDescriptionText)
        .click(CreateAssetButton)
        .setNativeDialogHandler(() => true())
        .click(CreateAssetConfirmationDialog)
        }catch(error){
            console.log(error);
        }
    }

    async VerifyAdminConsoleAssetTab()
    {
        try{
         await t 
         .click(AdminConsoleNav)
         .expect(CreateAssetBtn.exists).ok('Create button exists')
         .expect(SearchButtonAdminConsoleAssetTab.exists).ok('Search field exists')
         .expect(ExportBtn.textContent).eql("Export")
         .expect(PaginationTxt.exists).ok()
         .expect(PaginationCarousel.exists).ok()
        for (var i = 1; i <= 5; i++){
        await t.expect(AssetTableHeaders.nth(i).innerText).eql(AssetTableHeadersExpected[i-1])
        }
        
        }catch(error){
            console.log(error);
        }
    }

    async VerifySearchFunctionality()
    {
        try{
         await t 
         .typeText(SearchButtonAdminConsoleAssetTab, AssetDescriptionText, { replace: true })
         for (var i = 1; i <= SearchResultsTableAssetNameDesc.count; i++){
            await t.expect(SearchResultsTableAssetNameDesc.nth(i).innerText).eql(AssetDescriptionText)
            }
            await t
            .click(SearchResultsTableAssetNameDesc)
            .click(CloseBtnAssetQuickAction) 
        }catch(error){
            console.log(error);
        }
    }

    async DeleteAssetFunctionality()
    {
        try{
            await NavigationOptionsPage.Select_TestSiteDMSTreeOverviewPage()
            await t 
            .typeText(SearchButtonAdminConsoleAssetTab, AssetDescriptionText+"savechanges", { replace: true })
            .click(SearchResultsTableAssetNameDesc)
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
         .typeText(SearchButtonAdminConsoleAssetTab, AssetDescriptionText, { replace: true })
         .click(SearchResultsTableAssetNameDesc)
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
         .typeText(SearchButtonAdminConsoleAssetTab, AssetDescriptionText+"savechanges", { replace: true })
         .click(SearchResultsTableAssetNameDesc)
         .click(MoveBtnAssetQuickAction)
         await NavigationOptionsPage.Select_TestSiteDMS()
         await t
         .click(MoveBtnPopupQuickAction)
         .setNativeDialogHandler(() => true())
         .click(CreateAssetConfirmationDialog)
         .expect(StatusMessage.innerText).contains("successfully")
        }catch(error){
            console.log(error);
        }
    }

    async SaveChangesAssetQuickActionsFunctionality()
    {
        try{
         await t 
         .typeText(SearchButtonAdminConsoleAssetTab, AssetDescriptionText, { replace: true })
         .click(SearchResultsTableAssetNameDesc)
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