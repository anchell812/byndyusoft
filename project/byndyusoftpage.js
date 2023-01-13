const BaseForm = require('../framework/baseform');
const Button = require('../framework/button');
const Label = require('../framework/label');


class ByndyusoftPage extends BaseForm {
    
    constructor() {
        super(new Label('//*[contains(text(),"Byndyusoft")]', 'Byndyusoft page unique element'), 'Byndyusoft page')
    }    
 
    get getPresentationButton() {
        return new Button('//div[contains(@class, "know-more__container")]/span', 'Get presentation button');
    }

    get contactInfo() {
        return new Label('//div[@class="popup-callback__content"]', 'Pop up content');
    }

    async clickGetPresentationButton() {
        await this.getPresentationButton.scrollToElement();
        return this.getPresentationButton.waitAndClick();
    }

    async gettingContactInfo() {
        const element = await this.contactInfo;
        const text = await element.getElementText();
        return text;
    } 

}

module.exports = new ByndyusoftPage();