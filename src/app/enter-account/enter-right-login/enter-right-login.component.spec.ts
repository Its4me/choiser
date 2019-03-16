import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnterRightLoginComponent } from './enter-right-login.component';

describe('EnterRightLoginComponent', () => {
  let component: EnterRightLoginComponent;
  let fixture: ComponentFixture<EnterRightLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnterRightLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnterRightLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
