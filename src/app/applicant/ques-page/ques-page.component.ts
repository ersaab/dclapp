import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-ques-page',
  templateUrl: './ques-page.component.html',
  styleUrls: ['./ques-page.component.css']
})
export class QuesPageComponent implements OnInit {
  display:number = 1;
  box:number = 1;
  hd:any;

  arr:any = [{id:0}, {
              id:1,
              head: "1 - Loan Information",
              path: "./assets/pics/applicant/applicantLoanInformation.png"
            },
            {
              id:2,
              head: "2 - Subject Property Information",
              path: "./assets/pics/applicant/applicantPropertyInformation.png"
            }, 
            {
              id:3,
              head: "3 - Current Mortgage information",
              path: "./assets/pics/applicant/applicantMortgageInformation.png"
            },
            {
              id:4,
              head: "4 - Contact Information",
              path: "./assets/pics/applicant/applicantContactInfromation.png"
            },
            {
              id:5,
              head: "5 - Applicant Information",
              path: "./assets/pics/applicant/applicantInformation.png"
            },
            {
              id:6,
              head: "6 - Income Information",
              path: "./assets/pics/applicant/applicantIncomeInfromation.png"
            },
            {
              id:7,
              head: "7 - Add a Co-Applicant",
              path: "./assets/pics/applicant/applicantCoApplicant.png"
            },
            {
              id:8,
              head: "Review & Submit",
              path: "./assets/pics/applicant/applicantReview.png"
            }]

  quesData = 
  {
    qid1: 'How much Money are you looking to Borrow?',
    qid2: 'When do you need this money in-hand?',
    opt2: ["This week", "This month", "In less than three months", "In less than six months"],
    qid3: 'What will you use this loan for?',
    opt3: ["Renovation", "Pay debt", "BUYING A HOUSE with a SIGNED OFFER", "BUYING A HOUSE without a SIGNED OFFER"],
    qid4: 'What is the address of the subject property?',
    opt4: ["on", "bc"],
    qid5: 'What type of property is this?',
    opt5: ["Owner Occupied", "Rental", "Second home", "Owner occupied + rental"],
    qid6: 'What kind of property is this?',
    opt6: ["Single detached", "Condo", "Townhouse", "Duplex", "Triplex", "Cottage", "Other"],
    qid7: 'What is the property value / purchase price?',
    qid8: 'What is the remaining balance on your current mortgage?',
    qid9: 'Who is current holder of your mortgage?',
    qid10: 'What is your current email address?',
    qid11: 'What is your current phone number?',
    qid12: 'Which contact method do you prefer?',
    qid13: 'Do we have consent to post your deal to the lenders marketplace to get the best rate for you?',
    qid14: 'Create an account and save your application progress',
    qid15: 'Choose a password',
    qid16: 'Confirm your password',

    qid17: 'What is your name?',
    qid18: 'What is your date of birth?',
    qid19: 'What is your address?',
    qid20: 'Who is your current employer?',
    qid21: 'What is your employer’s address?',
    qid22: 'Tell us about your role with this employer',
    qid23: 'What is your annual income with this employer?',
    qid24: 'What type of income do you earn?',
    opt24: ['Salary', 'Hourly', 'Hourly + commissions', 'Commissions'],
    qid25: 'Describe your additional income sources',
    qid26: 'What is your annual income from other sources?',

    qid27: 'Would you like to add a co-applicant?',
    qid28: 'What is the co-applicant’s name?',
    qid29: 'What is the co-applicant’s date of birth?',
    qid30: 'What is the co-applicant’s address?',
    qid31: 'Who is the co-applicant’s current employer?',
    opt31: ['Varies','Clerical','Labour or trades','Management','Professional'],
    qid32: 'Describe your relationship to the co-applicant',
    qid33: 'What is the co-applicant’s employer’s address?',
    qid34: 'Tell us about the co-applicant’s role with this employer',
    qid35: 'What is the co-applicant’s annual income with this employer?',
    qid36: 'What type of income does the co-applicant earn?',
    qid37: 'Describe the co-applicant’s additional income sources',
    qid38: 'What is the co-applicant’s annual income from other sources?',

    mainTerms: ' The words “I”, “me” and “my” mean the person who signs and submits this application. The words, “Verico Mortgage Broker” means an independent mortgage broker that is a member of the Verico Mortgage Broker Network. If I have included information in this application in respect of any other person, including a co-applicant, I hereby confirm that such other person(s) has fully authorized me to release their personal information to my Verico Mortgage Broker and that such other person(s) consent to all of the terms set-out herein. The word “Information” means personal information about me and any other person(s) identified in this application, obtained from this application or other sources. I request that this application be submitted to my Verico Mortgage Broker as soon as possible. I understand that in submitting my application to my Verico Mortgage Broker, I am hereby expressly consenting to the submission of my application and the disclosure of Information to third parties, such as lenders, insurers, credit reporting agencies, and the Verico Mortgage Brokers national or local affiliates, for the purpose of arranging and/or renewing mortgage(s). I understand that this will allow lenders to submit commitments for my review. I hereby consent to and agree that my Verico Mortgage Broker may use the Information in order to identify me, protect me from fraud and error, understand my needs and eligibility for products and/or services, recommend particular products and services to meet my needs, provide ongoing services, and comply with legal and regulatory requirements. I consent to and agree that my Verico Mortgage Broker may use the Information for the above-noted purposes and may obtain Information about me from others, including consumer reporting agencies, credit bureaus, financial institutions, and real estate appraisers and may confirm the accuracy of the Information by contacting such third parties. I further consent to and agree that each lender considering my application may obtain Information about me (and all co-applicants) from others, including consumer reporting agencies, credit the formation by contacting such third parties. I hereby consent to and agree that my Verico Mortgage Broker may retain the Information after the last mortgage application made on my behalf, or the end of the term of the mortgage, whichever is later and that my Verico Mortgage Broker may retain and use my personal information for the purposes listed above after the last mortgage application made on my behalf. I hereby acknowledge that I have been advised that Mortgage Life/Creditor Insurance may be available to me through a lender, insurance company or broker and take sole responsibility to investigate and secure such coverage if desired. I acknowledge that my Verico Mortgage Broker is an independently owned and operated member of the Verico Mortgage Broker Network (VERICO). I further acknowledge that my Verico Mortgage Broker and VERICO have no obligation to locate a lender and no responsibility or liability for any acts or omissions of any lender including failure to secure any loan by any deadline. I hereby acknowledge that my Verico Mortgage Broker may receive consideration from a lender, and that consideration may vary with the mortgage interest rate and mortgage terms accepted by me. Such consideration may include monetary fees, or goods and services having value to the recipient. The parties hereto confirm that it is their wish that this Agreement, as well as all other documents relating hereto, including notices, have been and shall be drawn up in the English language only.  Les parties aux presentes confirment leur volonte que cette convention, de meme que cette convention, de mem que tous les documents, y compris tout avis qui s’y rattache, soient rediges en langue anglaise.',
    terms: 'I hereby agree to all terms in the above agreement and: (a) certify that the information given in my application is complete and correct, (b) consent to this agreement being exchanged by email and other electronic means, which may be less secure than mail, (c) consent that this electronic agreement shall be deemed as valid as a paper contract, and (d) consent that my printed name below shall act as my signature.',
    emsg: 'I agree to receive electronic messages containing news and updates relevant to me and/or the mortgage industry. I understand my consent can be withdrawn at any time.'
  }

  mortgageApplication = new FormGroup ({
    "applicantBorrowAmount": new FormControl("", Validators.required),
    "applicantTimeAmount": new FormControl("", Validators.required),
    "applicantLoanUsage": new FormControl("", Validators.required),

    "applicantPropAddress": new FormControl("", Validators.required),
    "applicantPropUnitNo": new FormControl("", Validators.required),
    "applicantPropCityName": new FormControl("", Validators.required),
    "applicantPropProvince": new FormControl("", Validators.required),
    "applicantPropZipCode": new FormControl("", Validators.required),
    
    "applicantPropertyKind": new FormControl("", Validators.required),
    "applicantPropertyType": new FormControl("", Validators.required),
    "applicantPropValue": new FormControl("", Validators.required),
    
    "applicantMortBal": new FormControl("", Validators.required),
    
    "applicantPhno": new FormControl("", Validators.required),
    "applicantEmail": new FormControl("", Validators.required),
    
    
    "applicantContactMethod": new FormControl("", Validators.required),
    "applicantConcentMarket": new FormControl("", Validators.required),
    "applicantPassword": new FormControl("", Validators.required),
    "applicantConfirmPassword": new FormControl("", Validators.required),

    "applicantFirstName": new FormControl("", Validators.required),
    "applicantLastName": new FormControl("", Validators.required),
    "applicantMiddleName": new FormControl("", Validators.required),

    "applicantBirthMonth": new FormControl("", Validators.required),
    "applicantBirthDate": new FormControl("", Validators.required),
    "applicantBirthYear": new FormControl("", Validators.required),

    "isAddressSame": new FormControl("", Validators.required),
    "applicantAddress": new FormControl("", Validators.required),
    "applicantUnitNo": new FormControl("", Validators.required),
    "applicantCityName": new FormControl("", Validators.required),
    "applicantProvince": new FormControl("", Validators.required),
    "applicantZipCode": new FormControl("", Validators.required),
    
    "isAppUnemployed": new FormControl("", Validators.required),
    "applicantEmpName": new FormControl("", Validators.required),
    "applicantEmpIndustry": new FormControl("", Validators.required),
    "applicantEmpAddress": new FormControl("", Validators.required),
    "applicantEmpUnitNo": new FormControl("", Validators.required),
    "applicantEmpCityName": new FormControl("", Validators.required),
    "applicantEmpProvince": new FormControl("", Validators.required),
    "applicantEmpZipCode": new FormControl("", Validators.required),
    "applicantRoleWithEmp": new FormControl("", Validators.required),
    "applicantEmpDate": new FormControl("", Validators.required),
    "applicantIndExp": new FormControl("", Validators.required),
    "applicantAnnualIncome": new FormControl("", Validators.required),
    "applicantIncomeType": new FormControl("", Validators.required),
    "applicantAddIncome": new FormControl("", Validators.required),
    "applicantAddIncomeAmount": new FormControl("", Validators.required),
    
    "co-applicantAdd": new FormControl("", Validators.required),
    "co-applicantFirstName": new FormControl("", Validators.required),
    "co-applicantLastName": new FormControl("", Validators.required),
    "co-applicantMiddleName": new FormControl("", Validators.required),

    "co-applicantBirthMonth": new FormControl("", Validators.required),
    "co-applicantBirthDate": new FormControl("", Validators.required),
    "co-applicantBirthYear": new FormControl("", Validators.required),

    "isCoAppAddressSame": new FormControl("", Validators.required),
    "co-applicantAddress": new FormControl("", Validators.required),
    "co-applicantUnitNo": new FormControl("", Validators.required),
    "co-applicantCityName": new FormControl("", Validators.required),
    "co-applicantProvince": new FormControl("", Validators.required),
    "co-applicantZipCode": new FormControl("", Validators.required),

    "isCo-AppUnemployed": new FormControl("", Validators.required),
    "co-applicantEmpName": new FormControl("", Validators.required),
    "co-applicantEmpIndustry": new FormControl("", Validators.required),
    "co-applicantRelation": new FormControl("", Validators.required),
    "co-applicantEmpAddress": new FormControl("", Validators.required),
    "co-applicantEmpUnitNo": new FormControl("", Validators.required),
    "co-applicantEmpCityName": new FormControl("", Validators.required),
    "co-applicantEmpProvince": new FormControl("", Validators.required),
    "co-applicantEmpZipCode": new FormControl("", Validators.required),
    "co-applicantRoleWithEmp": new FormControl("", Validators.required),
    "co-applicantEmpDate": new FormControl("", Validators.required),
    "co-applicantIndExp": new FormControl("", Validators.required),
    "co-applicantAnnualIncome": new FormControl("", Validators.required),
    "co-applicantIncomeType": new FormControl("", Validators.required),
    "co-applicantAddIncome": new FormControl("", Validators.required),
    "co-applicantAddIncomeAmount": new FormControl("", Validators.required),

    "noteToDCL": new FormControl("", Validators.required),
    "applicantEMessageAgreed": new FormControl("", Validators.required),
    "applicantTermsAgreed": new FormControl("", Validators.required),

  });

  uploadBtn()
  {

  }

  next()
  {
    this.box = this.box+1;
    if(this.box == 4 || this.box == 7 || this.box == 9 || this.box == 11 || this.box == 14 || this.box == 19 || this.box == 29){ this.display++ }
    this.hd=this.arr[this.display];
  }

  submit()
  {
    console.log("reactive form submitted");
    console.log(this.mortgageApplication);
  }
  prev()
  {
    this.box = this.box-1;
    if(this.box == 3 || this.box == 6 || this.box == 8 || this.box == 10 || this.box == 13 || this.box == 18 || this.box == 28){ this.display-- }
    this.hd=this.arr[this.display];
  }

  constructor( public router:Router, private formBuilder: FormBuilder ) { }

  ngOnInit(): void {
    this.hd=this.arr[this.display];
}
}
