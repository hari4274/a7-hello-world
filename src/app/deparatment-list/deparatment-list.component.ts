import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-deparatment-list',
  template: `
    <h3>
      Department List
    </h3>
    <ul class="items">
      <li (click)="onSelect(department)" [class.selected]="isSelected(department)" *ngFor="let department of departments">
        <span class="badge">{{ department.id }}</span> {{department.name}}
      </li>
    </ul>
  `,
  styles: []
})
export class DeparatmentListComponent implements OnInit {

  public selectedId;
  departments = [
    {"id": 1, "name": "Angular"},
    {"id": 2, "name": "Node"},
    {"id": 3, "name": "MongoDB"},
    {"id": 4, "name": "Ruby"},
    {"id": 5, "name": "Bootstrap"},
    {"id": 6, "name": "Javascript"},
    {"id": 7, "name": "Python"},
  ]
  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    console.log(window.location.href);
    this.route.paramMap.subscribe((params: ParamMap) => {
      let id = parseInt(params.get('id'));
      this.selectedId = id;
    });
  }

  onSelect(department) {
    this.router.navigate(['/departments', department.id])
  }

  isSelected(department) {
    return department.id === this.selectedId;
  }

}