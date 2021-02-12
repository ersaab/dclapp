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
  arr:any = ["", 
             "1 - Loan Information", 
             "2 - Subject Property Information", 
             "3 - Current Mortgage information", 
             "4 - Contact Information",
             "5 - Applicant Information",
             "6 - Income Information",
             "7 - Add a Co-Applicant"]

  quesData = 
  { 
    qid1:'How much Money are you looking to Borrow?',
    qid2:'When do you need this money in-hand?',
    opt2: ["This week", "This month", "In less than three months", "In less than six months"],
    qid3:'What will you use this loan for?',
    opt3: ["Renovation", "Pay debt", "BUYING A HOUSE with a SIGNED OFFER", "BUYING A HOUSE without a SIGNED OFFER"],
    qid4:'What is the address of the subject property?',
    opt4: ["on", "bc"],
    qid5:'What type of property is this?',
    opt5: ["Owner Occupied", "Rental", "Second home", "Owner occupied + rental"],
    qid6:'What kind of property is this?',
    opt6: ["Single detached", "Condo", "Townhouse", "Duplex", "Triplex", "Cottage", "Other"],
    qid7:'What is the property value / purchase price?'
  }

  mortgageApplication = new FormGroup ({
    "borrowAmount": new FormControl("", Validators.required),
    "timeAmount": new FormControl("", Validators.required),
    "loanUsage": new FormControl("", Validators.required),

    "firstName": new FormControl("", Validators.required),
    "lastName": new FormControl("", Validators.required),
    "phno": new FormControl("", Validators.required),
    "email": new FormControl("", Validators.required),
    "altemail": new FormControl("", Validators.required),
    "unitNo": new FormControl("", Validators.required),

    "streetName": new FormControl("", Validators.required),
    "cityName": new FormControl("", Validators.required),
    "stateName": new FormControl("", Validators.required),
    "countryName": new FormControl("", Validators.required),
    "zipCode": new FormControl("", Validators.required),

    "riskAppetite": new FormControl("", Validators.required),
    "investAmount": new FormControl("", Validators.required),
    "knowledge": new FormControl("", Validators.required),
    "exp": new FormControl("", Validators.required),

    "ltvRisk": new FormControl("", Validators.required),
    "prefRate": new FormControl("", Validators.required),
    "prefTerm": new FormControl("", Validators.required),
    "prefPayback": new FormControl("", Validators.required),
    "termType": new FormControl("", Validators.required)
  });



  next()
  {
    this.box = this.box+1;
    if(this.box == 4){ this.display++ }
    if(this.box == 7){ this.display++ }
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
    if(this.box == 3 ){ this.display-- }
    if(this.box == 6 ){ this.display-- }
    this.hd=this.arr[this.display];
  }

  constructor( public router:Router, private formBuilder: FormBuilder ) { }

  ngOnInit(): void {
    this.hd=this.arr[this.display];
}
}
