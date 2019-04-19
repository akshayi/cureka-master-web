import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicineModelComponent } from './medicine-model.component';

describe('MedicineModelComponent', () => {
  let component: MedicineModelComponent;
  let fixture: ComponentFixture<MedicineModelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedicineModelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicineModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
