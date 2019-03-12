import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalityPopUpComponent } from './personality-pop-up.component';

describe('PersonalityPopUpComponent', () => {
  let component: PersonalityPopUpComponent;
  let fixture: ComponentFixture<PersonalityPopUpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonalityPopUpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalityPopUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
