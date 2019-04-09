import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeparatmentListComponent } from './deparatment-list.component';

describe('DeparatmentListComponent', () => {
  let component: DeparatmentListComponent;
  let fixture: ComponentFixture<DeparatmentListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeparatmentListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeparatmentListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
