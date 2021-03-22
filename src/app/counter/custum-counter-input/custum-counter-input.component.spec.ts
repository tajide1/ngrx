import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustumCounterInputComponent } from './custum-counter-input.component';

describe('CustumCounterInputComponent', () => {
  let component: CustumCounterInputComponent;
  let fixture: ComponentFixture<CustumCounterInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustumCounterInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustumCounterInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
