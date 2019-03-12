import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnterLeftComponent } from './enter-left.component';

describe('EnterLeftComponent', () => {
  let component: EnterLeftComponent;
  let fixture: ComponentFixture<EnterLeftComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnterLeftComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnterLeftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
