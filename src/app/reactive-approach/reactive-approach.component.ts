import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-approach',
  templateUrl: './reactive-approach.component.html',
  styleUrls: ['./reactive-approach.component.css'],
})
export class ReactiveApproachComponent implements OnInit {
  constructor() {}
  companyFormGroup: FormGroup;

  CustomerDetails: FormArray;
  CustomerForm: FormGroup;


  CustomValidationForm : FormGroup;
  ngOnInit(): void {

    this.companyFormGroup = new FormGroup({
      companyEmail: new FormControl(null, [
        Validators.required,
        Validators.minLength(5),
        Validators.email,
      ]),
      cityName: new FormControl(null, [Validators.required]),
      security: new FormGroup({
        securityAnswer: new FormControl(null, [Validators.required]),
      }),
    });

    this.CustomerForm = new FormGroup({
      CustomerDetails: new FormArray([
        new FormGroup({
          ContactName: new FormControl(),
          OrderName: new FormControl(),
        }),
      ]),
    });
    console.log(this.CustomerForm);


    this.CustomValidationForm = new FormGroup({
       'validEmail' : new FormControl(null,[
        Validators.required ,
         this.gmailDomain])
    })


  }


  name : string = "";

  // {'isnotGmail' : true};

  gmailDomain(control:FormControl) : { [key:string] : boolean } | null{
    let emailValue = control.value;
    let returnany : any;
    if(emailValue !== null){
        let emailValues =  emailValue as string;
        if(emailValues.split("@")[1] === "gmail.com"){
          returnany = null;
        }
        else{
          returnany = { 'isnotGmail' : true}
        }
    }
    return returnany
  }



  get customerFormArray(): FormArray {
    return this.CustomerForm.get('CustomerDetails') as FormArray;
  }

  evtAdd() {
    let FormArray = this.CustomerForm.get('CustomerDetails') as FormArray;
    FormArray.push(
      new FormGroup({
        'ContactName': new FormControl(),
        'OrderName': new FormControl()
      })
    );
  }

  cityNames = [
    {
      ID: 1,
      name: 'Bangolore',
    },
    {
      ID: 2,
      name: 'Hyderabad',
    },
    {
      ID: 3,
      name: 'Chennai',
    },
  ];

  evtSubmit() {
    console.log(this.companyFormGroup);
  }
}
