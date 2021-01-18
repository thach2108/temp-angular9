import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardCustomizeComponent } from './card-customize.component';

describe('CardCustomizeComponent', () => {
  let component: CardCustomizeComponent;
  let fixture: ComponentFixture<CardCustomizeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardCustomizeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardCustomizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
