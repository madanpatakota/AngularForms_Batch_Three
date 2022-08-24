import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-approach',
  templateUrl: './reactive-approach.component.html',
  styleUrls: ['./reactive-approach.component.css']
})
export class ReactiveApproachComponent implements OnInit {

  constructor() { }
  companyFormGroup : FormGroup;
  ngOnInit(): void {
        this.companyFormGroup = new FormGroup({
             'companyEmail' : new FormControl(null,
              [ 
                Validators.required,
                Validators.minLength(5),
                
              ])
        })
  }


  evtSubmit(){
      console.log(this.companyFormGroup);
  }

}
