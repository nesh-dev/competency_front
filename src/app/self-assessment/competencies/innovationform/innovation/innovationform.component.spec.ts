import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InnovationformComponent } from './innovationform.component';

describe('InnovationformComponent', () => {
  let component: InnovationformComponent;
  let fixture: ComponentFixture<InnovationformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InnovationformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InnovationformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
