import { ClientFunction, Selector, t } from "testcafe";
import constants from "../utilities/constants";
import XPathSelector from "../utilities/xpath-selector";

const ActiveServiceLogTab = XPathSelector(".//*[text()='Active Service Log']")
const ServiceLogNotifications = XPathSelector(".//*[text()='Active Service Log']")
const SLCreateBtn = Selector("#root_pagemashupcontainer-2_mashupcontainer-43_ptcsbutton-131")
const TitleTxtBx = Selector("#root_pagemashupcontainer-2_mashupcontainer-43_navigationfunction-132-popup_ptcstextfield-14")
const ContentTxtBx = Selector("ptcs-textarea").shadowRoot().find("div > div > textarea");
const CreateBtnPopup = Selector("#root_pagemashupcontainer-2_mashupcontainer-43_navigationfunction-132-popup_ptcsbutton-17");
const PostTitle  = Selector("ptcs-textfield").nth(-1).shadowRoot().find("div > div > span");

class ServiceLogPage
{
    async CreateServiceLogPost2()
    {
        await t 
        .click(SLCreateBtn)
        .typeText(TitleTxtBx, constants.serviceLog.createTitle)
        .typeText(ContentTxtBx, constants.serviceLog.addContent)
        .click(CreateBtnPopup)
    }

    async CreateServiceLogPost()
    {
        try{
            await t 
           .click(SLCreateBtn)
           .typeText(PostTitle, constants.serviceLog.createTitle)
           .typeText(ContentTxtBx, constants.serviceLog.addContent)
           .click(CreateBtnPopup)
           }catch(error){
               console.log(error);
           }
    }

}
export default new ServiceLogPage()