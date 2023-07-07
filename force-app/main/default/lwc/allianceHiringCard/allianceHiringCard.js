import { LightningElement, api } from 'lwc';

export default class AllianceHiringCard extends LightningElement {
    @api type;
    @api companyName;
    @api location;
    @api interviewSignUpUrl;
    @api companyUrl;
    @api showImage;

    get headerColor() {
        if (this.type == "Salesforce Partner") {
            return "type-format slds-align-top slds-text-align_left green";
        } else if (this.type == "Salesforce Customer") {
            return "type-format slds-align-top slds-text-align_left blue";
        } else {
            return "type-format slds-align-top slds-text-align_left purple";
        }

    }
}