import { ComponentFixture, TestBed } from '@angular/core/testing';

import { D3TreeComponent } from './d3-tree.component';

describe('D3TreeComponent', () => {
  let component: D3TreeComponent;
  let fixture: ComponentFixture<D3TreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ D3TreeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(D3TreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
