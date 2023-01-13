const {assert} = require('chai');
const googlePage = require('../project/googlepage');
const byndyusoftPage = require('../project/byndyusoftpage');
const testData = require('../data/testdata.json');


describe('Verifying Byndyusoft contact information', () => {
    it('Checking contact info', async () => {
        await browser.open('/');
        assert.isTrue(await googlePage.isPageOpened(), 'Google page should be opened');
        await googlePage.sendSearchText(testData.searchText);
        await googlePage.clickSubmitButton();
        await googlePage.goToFirstResult();
        await browser.switchWindow(testData.url);
        assert.isTrue(await byndyusoftPage.isPageOpened(), 'Byndyusoft page should be opened');
        await byndyusoftPage.clickGetPresentationButton();
        assert.include(await byndyusoftPage.gettingContactInfo(), testData.email);
        assert.include(await byndyusoftPage.gettingContactInfo(), testData.phoneNumber);
    })
});
