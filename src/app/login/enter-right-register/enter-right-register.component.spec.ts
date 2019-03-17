import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnterRightRegisterComponent } from './enter-right-register.component';

describe('EnterRightRegisterComponent', () => {
  let component: EnterRightRegisterComponent;
  let fixture: ComponentFixture<EnterRightRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnterRightRegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnterRightRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
