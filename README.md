# wfd-community

## Dev, Build and Test

## Resources

## Description of Files and Directories

## Issues

## Data Setup
https://blog.texei.com/easily-load-data-into-your-scratch-org-or-sandbox-part-1-89b7e385fb0c
https://blog.texei.com/easily-load-data-into-your-scratch-org-or-sandbox-part-2-c00604462a97

1. How to Install
sfdx plugins:install texei-sfdx-plugin

2. How to Export: Authorize WFD Production org by keeping the org alias as wfd-production OR use whatever alias you have set for the target org to export the data

sfdx texei:data:export --objects Certification__c,BadgeDetails__c,Class__c,Career__c,Goal__c,Specialized_Skill__c,Moment_of_Delight__c,Badge_Assignment__c  --outputdir ./data --targetusername wfd-production

3. How to Import: Authorize WFD sandbox org by keeping the org alias as wfd-sb-data OR use whatever alias you have set for the target org to import the data
sfdx texei:data:import --inputdir ./data --targetusername wfd-sb-data

Pending Master data
====================
Vouchers = some sample vouchers are needed which can be created by apex script
Class Schedule = some sample classes and their related class schedule data is needed (date dependent data)

Knowledge (needed to public site)
Guest User Access (needed to public site)
Accounts (needed to public site)
Alliance Interviews (needed to public site)

User Specific data
====================
Vetforce Badges (user earned badges)
Transcripts (user earned certifications)
Badge Earned for Goal#   t r a i l h e a d - c o a c h - m a s t e r  
 