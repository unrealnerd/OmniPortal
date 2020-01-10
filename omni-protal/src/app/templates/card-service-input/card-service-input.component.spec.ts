import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardServiceInputComponent } from './card-service-input.component';

describe('CardServiceInputComponent', () => {
  let component: CardServiceInputComponent;
  let fixture: ComponentFixture<CardServiceInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardServiceInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardServiceInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
