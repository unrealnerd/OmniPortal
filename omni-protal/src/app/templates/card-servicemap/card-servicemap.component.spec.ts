import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardServicemapComponent } from './card-servicemap.component';

describe('CardServicemapComponent', () => {
  let component: CardServicemapComponent;
  let fixture: ComponentFixture<CardServicemapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardServicemapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardServicemapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
