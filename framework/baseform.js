const logger = require("../logger/logger");
const timeouts = require("../data/configdata.json");

class BaseForm {

    constructor(uniqElement, pageName) {
        this.uniqElement = uniqElement;
        this.pageName = pageName;
    }

    async isPageOpened () {
        logger.info(`Check if ${this.pageName} opens`);
        await this.uniqElement.waitForPresent();
        return this.uniqElement.isElementPresent();
    }

    async isPageOpenedafterWait () {
        logger.info(`Check if ${this.pageName} opens after ${timeouts.waits}`);
        await this.uniqElement.waitForPresent();
        return this.uniqElement.isElementPresent();
    }
}

module.exports = BaseForm;