import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HighestRatingComponent } from './highest-rating.component';

describe('HighestRatingComponent', () => {
  let component: HighestRatingComponent;
  let fixture: ComponentFixture<HighestRatingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HighestRatingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HighestRatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
