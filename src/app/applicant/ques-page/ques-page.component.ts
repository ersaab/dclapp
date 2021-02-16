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
              head: "Applicant Information",
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
    qid32: 'Describe your relationship to the co-applicant',
    
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
    "applicantAddress": new FormControl("", Validators.required),
    "applicantUnitNo": new FormControl("", Validators.required),
    "applicantCityName": new FormControl("", Validators.required),
    "applicantProvince": new FormControl("", Validators.required),
    "applicantZipCode": new FormControl("", Validators.required),
    
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
    "co-applicantAddress": new FormControl("", Validators.required),
    "co-applicantUnitNo": new FormControl("", Validators.required),
    "co-applicantCityName": new FormControl("", Validators.required),
    "co-applicantProvince": new FormControl("", Validators.required),
    "co-applicantZipCode": new FormControl("", Validators.required),
    "co-applicantEmpName": new FormControl("", Validators.required),
    "co-applicantEmpIndustry": new FormControl("", Validators.required),
    "co-applicantRelation": new FormControl("", Validators.required),

  });

  uploadBtn()
  {

  }

  next()
  {
    this.box = this.box+1;
    if(this.box == 4 || this.box == 7 || this.box == 9 || this.box == 11 || this.box == 15 || this.box == 18){ this.display++ }
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
    if(this.box == 3 || this.box == 6 || this.box == 8 || this.box == 10 || this.box == 14 || this.box == 17){ this.display-- }
    this.hd=this.arr[this.display];
  }

  constructor( public router:Router, private formBuilder: FormBuilder ) { }

  ngOnInit(): void {
    this.hd=this.arr[this.display];
}
}
