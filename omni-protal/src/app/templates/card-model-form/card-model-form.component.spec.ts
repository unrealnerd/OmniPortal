import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardModelFormComponent } from './card-model-form.component';

describe('TemplatescardModelFormComponent', () => {
  let component: CardModelFormComponent;
  let fixture: ComponentFixture<CardModelFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardModelFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardModelFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
