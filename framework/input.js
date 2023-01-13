const logger = require('../logger/logger');
const BaseElement = require('./baseelement');

class InputField extends BaseElement {
      
    constructor(locator, name) {
        super(locator, name)
    }
    
    async sendData (data) {
        logger.info(`Sending data to ${this.elName}`);
        const el = await $(this.locator);
        await el.setValue(data);
    }
}


module.exports = InputField;