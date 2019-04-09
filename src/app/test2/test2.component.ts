import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: '.app-test2',
  template: `

  <button (click)="fireEvent()">Send Event to parent</button>
  <h1>{{"Parent data : "+ parentData}}</h1>
  <h1>{{"Parent data by alaias : "+ parentName}}</h1>
  <h1>IF Statement</h1>
  <div *ngIf="displayName; else elseBlock">
    <input [(ngModel)]="name" type="text">
    {{ name }}
  </div>

  <div *ngIf="displayName; then thenBlock; else elseBlock"></div>
  
  <ng-template #thenBlock>
  {{ name }}
  </ng-template>

  <ng-template #elseBlock>
  <h2>Name is hidden</h2>
  </ng-template>

  <h1>Switch</h1>
  <div [ngSwitch]="color" [style.color]="color">
    <div *ngSwitchCase="'red'">You Picked Red</div>
    <div *ngSwitchCase="'blue'">You Picked Blue</div>
    <div *ngSwitchCase="'green'">You Picked Green</div>
    <div *ngSwitchDefault>Pick again</div>
  </div>

  <h1>For</h1>
  <div *ngFor="let clr of colors; index as i; first as f;last as l">
   <h2 [style.color]="clr">{{i}} {{f}} {{ clr }} {{l}}</h2>
  </div>

   <div *ngFor="let clr of colors;odd as o">
   <h2 [style.color]="clr">{{o}} {{ clr }}</h2>
  </div>

  <div *ngFor="let clr of colors;even as e">
   <h2 [style.color]="clr">{{e}} {{ clr }}</h2>
  </div>

  `,
  styles: []
})
export class Test2Component implements OnInit {
  public name = "Hari";
  displayName = false;
  public color = "orange";
  public colors = ["red", "blue", "green", "yellow"]

  @Input() public parentData;
  @Input('parentData2') public parentName; // Alaias from parent data

  @Output() public childEvent = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  fireEvent() {
    this.childEvent.emit('Hey hari pythonic....');
  }

}
