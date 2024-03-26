import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpalfromComponent } from './simpalfrom.component';

describe('SimpalfromComponent', () => {
  let component: SimpalfromComponent;
  let fixture: ComponentFixture<SimpalfromComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SimpalfromComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SimpalfromComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
