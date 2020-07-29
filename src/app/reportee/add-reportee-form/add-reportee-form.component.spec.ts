import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddReporteeFormComponent } from './add-reportee-form.component';

describe('AddReporteeFormComponent', () => {
  let component: AddReporteeFormComponent;
  let fixture: ComponentFixture<AddReporteeFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddReporteeFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddReporteeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
