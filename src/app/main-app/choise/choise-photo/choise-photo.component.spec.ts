import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoisePhotoComponent } from './choise-photo.component';

describe('ChoisePhotoComponent', () => {
  let component: ChoisePhotoComponent;
  let fixture: ComponentFixture<ChoisePhotoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChoisePhotoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChoisePhotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
