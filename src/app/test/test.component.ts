import { Component, OnInit } from '@angular/core';
import { TestBedViewEngine } from '@angular/core/testing/src/test_bed';

@Component({
  selector: 'app-test',
  template: `<div> 
          <h2 class="text-success">Welcome {{name}}</h2>

          <input #myInput type="text">
          <button (click)="logMessage(myInput)">Log</button>



          <button (click)="onClick($event)">Greet</button>
          <button (click)="greeting='welcome hari'">Greet</button>
          <p>{{ greeting }}</p>

          <h2 [class]="successClass">Welcome {{name}}</h2>
          <h2 class="text-special" [class]="successClass">Welcome {{name}}</h2>
          <h2 [class.text-danger]="hasError">Welcome {{name}}</h2>
          <h2 [ngClass]="messageClasses">Welcome {{name}}</h2>
          <input [id]="myId" type="text" value="Hari">
          <input bind-disabled="isDisabled" id="{{ myId }}" type="text" value="Hari">

          <h2 [style.color]="'orange'">Style Binding</h2>
          <h2 [style.color]="hasError ? 'violet' : 'orange'">Style Binding Condition</h2>
          <h2 [style.color]="highlightColor">Style Binding2</h2>
          <h2 [ngStyle]="titleStyles">Style Binding3</h2>


          <h2>{{ 2+2 }}</h2>
          <h2>{{ "welcome"+ name }}</h2>
          <h2>{{ name.length }}</h2>
          <h2>{{ name.toUpperCase() }}</h2>
          <h2>{{ greetUser() }}</h2>
          <h2>{{ siteUrl }}</h2>
          </div>`,
  styles: [`
        .text-success {
          color: green;
        }
        .text-danger {
          color: red;
        }
        .text-special {
          font-style: italic;
        }
  `]
})
export class TestComponent implements OnInit {

  public name = "Hari";
  public siteUrl = window.location.href;
  public myId = "testId";
  public isDisabled = false;

  public successClass = "text-success";
  public hasError = true;
  public isSpecial = true;
  public messageClasses = {
    "text-success": !this.hasError,
    "text-danger": this.hasError,
    "text-special": this.isSpecial,
  }
  public highlightColor = "orange";
  public titleStyles = {
    color: "blue",
    fontStyle: 'italic'
  }

  public greeting = "";

  constructor() { }

  ngOnInit() {
  }

  greetUser() {
    return "Hello " + this.name;
  }

  onClick(event) {
    console.log(event);
    this.greeting = 'welcome to hari Angular Test';
    this.greeting = event.type;
  }

  logMessage(value) {
    console.log(value);
    console.log(value.value);
  }

}
