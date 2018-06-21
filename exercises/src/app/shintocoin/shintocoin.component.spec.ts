import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ShintocoinComponent } from './shintocoin.component';

describe('ShintocoinComponent', () => {
  let component: ShintocoinComponent;
  let fixture: ComponentFixture<ShintocoinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShintocoinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShintocoinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
