import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardLabelComponent } from './card-label.component';

describe('CardLabelComponent', () => {
  let component: CardLabelComponent;
  let fixture: ComponentFixture<CardLabelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardLabelComponent]
    });
    fixture = TestBed.createComponent(CardLabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
