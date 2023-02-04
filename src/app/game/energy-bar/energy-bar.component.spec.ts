import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnergyBarComponent } from './energy-bar.component';

describe('EnergyBarComponent', () => {
  let component: EnergyBarComponent;
  let fixture: ComponentFixture<EnergyBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnergyBarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnergyBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
