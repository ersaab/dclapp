import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } 
    from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-base-design',
  templateUrl: './base-design.component.html',
  styleUrls: ['./base-design.component.css']
})
export class BaseDesignComponent implements OnInit {
  display:number = 1;
  hd:any;
  arr:any = ["", "1 - Profile Information", "2 - Address Information", "3 - Experience", "4 - Risk Tollerance"]
  
  lenderForm = new FormGroup ({
    "lenderType": new FormControl("", Validators.required),
    "orgName": new FormControl("", Validators.required),

    "firstName": new FormControl("", Validators.required),
    "lastName": new FormControl("", Validators.required),
    "phno": new FormControl("", Validators.required),
    "email": new FormControl("", Validators.required),
    "altemail": new FormControl("", Validators.required),
    "unitNo": new FormControl("", Validators.required),

    "streetname": new FormControl("", Validators.required),
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
    console.log(this.lenderForm);
  }
  prev()
  {
    this.display = this.display-1;
    this.hd=this.arr[this.display];
  }

  constructor( public router:Router ) { }

  ngOnInit(): void {
    this.hd=this.arr[this.display];
}
}
