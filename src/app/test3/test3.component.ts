import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[app-test3]',
  template: `
  <h2>{{ name }}</h2>
  <h2>{{ name  | lowercase }}</h2>
  <h2>{{ name  | uppercase }}</h2>
  <h2>{{ message  | titlecase }}</h2>
  <h2>{{ name  | slice:2:4 }}</h2>
  <h2>{{ person  | json }}</h2>

   <h2>{{ 5.678  | number:'1.2-3' }}</h2>
   <h2>{{ 5.678  | number:'3.4-5' }}</h2>
   <h2>{{ 5.678  | number:'3.1-2' }}</h2>
   
   <h2>{{ 0.25  | percent }}</h2>
   
   <h2>{{ 0.25  | currency }}</h2>
   <h2>{{ 0.25  | currency: 'INR': 'code' }}</h2>

   <h2>{{ date }}</h2>
   <h2>{{ date | date:'short' }}</h2>
   <h2>{{ date | date:'shortDate' }}</h2>
   <h2>{{ date | date:'shortTime' }}</h2>

  `,
  styles: []
})
export class Test3Component implements OnInit {

  public name="HariHP";
  public message = "welcome to Hterst";
  public person = {
    "firstName": "John",
    "lastName": "Smith"
  }
  public date = new Date();

  constructor() { }

  ngOnInit() {
  }

}
