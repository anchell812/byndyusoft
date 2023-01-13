const logger = require("../logger/logger");
const timeouts = require("../data/configdata.json");

class BaseElement {

    constructor(locator, elName) {
        this.locator = locator;
        this.elName = elName;
    }

    async isElementPresent() {
        logger.info(`Checking presence of ${this.elName}`);
        const element = await $$(this.locator);
        return element.length > 0;
    }

    async click() {
        logger.info(`Click on ${this.elName}`);
        const element = await $(this.locator);
        return element.click();
    }

    async waitAndClick() {
        logger.info(`Click on ${this.elName} after ${timeouts.waits}`);
        const element = await $(this.locator);
        await element.waitForClickable(`${{timeout: timeouts.waits}}`);
        return element.click();
    }

    async getElementText() {
        logger.info(`Getting text from ${this.elName}`);
        const element = await $(this.locator);
        return element.getText();
    }

    async waitForPresent() {
        logger.info('Waiting for element present');
        const element = await $(this.locator);
        await element.waitForExist({timeout:timeouts.waits, interval:timeouts.interval});
    }

    async scrollToElement() {
        logger.info(`Scrolling to ${this.elName}`);
        const element = await $(this.locator);
        return element.scrollIntoView();
    }
}

module.exports = BaseElement;