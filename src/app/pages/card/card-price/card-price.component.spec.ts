import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardPriceComponent } from './card-price.component';

describe('CardPriceComponent', () => {
  let component: CardPriceComponent;
  let fixture: ComponentFixture<CardPriceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardPriceComponent]
    });
    fixture = TestBed.createComponent(CardPriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
