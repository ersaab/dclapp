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
  hd:any;
  arr:any = ["", "1 - ", "2 - ", "3 - ", "4 - ","5 - ","6 - ","7 - "]

  mortgageApplication = new FormGroup ({
    "lenderType": new FormControl("", Validators.required),
    "orgName": new FormControl("", ),

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
    this.display = this.display+1
    this.hd=this.arr[this.display];
  }

  submit()
  {
    console.log("reactive form submitted");
    console.log(this.mortgageApplication);
  }
  prev()
  {
    this.display = this.display-1;
    this.hd=this.arr[this.display];
  }

  constructor( public router:Router, private formBuilder: FormBuilder ) { }

  ngOnInit(): void {
    this.hd=this.arr[this.display];
}

}
