import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherapiComponent } from './weatherapi.component';

describe('WeatherapiComponent', () => {
  let component: WeatherapiComponent;
  let fixture: ComponentFixture<WeatherapiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeatherapiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherapiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
