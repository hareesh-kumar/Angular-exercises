import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeattleWeatherComponent } from './seattle-weather.component';

describe('SeattleWeatherComponent', () => {
  let component: SeattleWeatherComponent;
  let fixture: ComponentFixture<SeattleWeatherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeattleWeatherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeattleWeatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
