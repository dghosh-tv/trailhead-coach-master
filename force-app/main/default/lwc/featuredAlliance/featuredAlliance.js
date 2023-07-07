// Copyright (c) 2023 Salesforce.com, inc. All rights reserved.
import { LightningElement,wire,api } from 'lwc';
import getFeaturedEmployers from "@salesforce/apex/AllianceEmployerController.getFeaturedEmployers";
import TAInterViewImages from "@salesforce/resourceUrl/TAInterview";

export default class FeaturedAlliance extends LightningElement {
  error;
  records = [];
  @api showImage;
  nonProfitLogoUrl = TAInterViewImages + "/Nonprofit_Cloud_Icon.png";
  partnerLogo = TAInterViewImages + "/Partners_Icon.png";
  buisnessLogo = TAInterViewImages + "/Sm_Med_Buisness_Icon.png";

  @wire(getFeaturedEmployers) results({ data, error }) {
    if (data) {
      var records = [];
      records = JSON.parse(JSON.stringify(data));
      // for Image assignment
      for (var i = 0; i < records.length; i++) {
        if (records[i].Type__c == "Salesforce Partner") {
          records[i].imageUrl = this.partnerLogo;
        } else if (records[i].Type__c == "Salesforce Nonprofit Customer") {
          records[i].imageUrl = this.nonProfitLogoUrl;
        } else if (records[i].Type__c == "Salesforce Customer") {
          records[i].imageUrl = this.buisnessLogo;
        }
      }
      this.records = records;
    } else {
      this.error = error;
    }
  }
}