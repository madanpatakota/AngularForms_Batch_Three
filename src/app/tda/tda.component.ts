import { Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-tda',
  templateUrl: './tda.component.html',
  styleUrls: ['./tda.component.css']
})
export class TDAComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  evtSubmit(CompanyName:any){
    console.log(CompanyName)
  }

}
