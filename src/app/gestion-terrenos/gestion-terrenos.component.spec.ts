import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionTerrenosComponent } from './gestion-terrenos.component';

describe('GestionTerrenosComponent', () => {
  let component: GestionTerrenosComponent;
  let fixture: ComponentFixture<GestionTerrenosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GestionTerrenosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestionTerrenosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
