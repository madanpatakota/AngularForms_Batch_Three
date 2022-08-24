import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-approach',
  templateUrl: './reactive-approach.component.html',
  styleUrls: ['./reactive-approach.component.css'],
})
export class ReactiveApproachComponent implements OnInit {
  constructor() {}
  companyFormGroup: FormGroup;
  ngOnInit(): void {
    this.companyFormGroup = new FormGroup({
      companyEmail: new FormControl(null, [
        Validators.required,
        Validators.minLength(5),
        Validators.email,
      ]),
      cityName:new FormControl(
        null,[Validators.required]),
      security: new FormGroup({
        securityAnswer : new FormControl(null,[Validators.required])
      })
    });
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
    }
  ];

  evtSubmit() {
    console.log(this.companyFormGroup);
  }
}
