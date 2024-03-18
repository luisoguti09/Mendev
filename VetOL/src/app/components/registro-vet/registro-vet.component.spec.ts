import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroVetComponent } from './registro-vet.component';

describe('RegistroVetComponent', () => {
  let component: RegistroVetComponent;
  let fixture: ComponentFixture<RegistroVetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RegistroVetComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RegistroVetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
