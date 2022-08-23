import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { delay } from 'rxjs';

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
      //  data
      // 2 controls List 
      // Anyalysis ---> debugging


      //wednesday
      // 1 year
      // 1 day asked second day

      // textbox drpdwon checkbox radio
      //html


      this.vcForm.setValue({
        "companyEmail" :  "sample@firstam.com",
        "companyphonenumber" :  7204185064
      })
  }

}
