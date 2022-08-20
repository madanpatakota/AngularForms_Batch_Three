import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-tda',
  templateUrl: './tda.component.html',
  styleUrls: ['./tda.component.css']
})
export class TDAComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @ViewChild("form") vcForm : NgForm;

   yourdetails = { compname : "" , companyphonenumber:""};
  evtSubmit(compDetails:NgForm){
    console.log(compDetails)


    this.yourdetails.compname =  compDetails.controls['companyEmail'].value;
    this.yourdetails.companyphonenumber = compDetails.controls['companyphonenumber'].value

  }

  evtDefaultData(){
      this.vcForm.setValue({
        "companyEmail" :  "sample@firstam.com",
        "companyphonenumber" :  7204185064
      })
  }

}
