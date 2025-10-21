const BaseForm = require('../framework/baseform');
const Button = require('../framework/button');
const InputField = require('../framework/input');
const Label = require('../framework/label');
const Link = require('../framework/link');



class GooglePage extends BaseForm {
    
    constructor() {
        super(new Label('//img[@alt="Google"]', 'Google page unique element'), 'Google page')
    }    

    get searchInput() {
        return new InputField('//input[@type="text"]', 'Search input field');
    }

    get submitButton() {
        return new Button('//input[@type="submit"]', 'Submit button');
    }

    get firstSearchResult() {
        return new Link('//*[text()="Byndyusoft"]', 'Link to first result');
    }

    async sendSearchText(text) {
        return this.searchInput.sendData(text); 
    }

    async clickSubmitButton() {
        return this.submitButton.click();
    }

    async goToFirstResult() {
        await this.firstSearchResult.click();
    }
}

module.exports = new GooglePage();