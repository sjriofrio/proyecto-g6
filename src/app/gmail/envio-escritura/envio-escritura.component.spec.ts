import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnvioEscrituraComponent } from './envio-escritura.component';

describe('EnvioEscrituraComponent', () => {
  let component: EnvioEscrituraComponent;
  let fixture: ComponentFixture<EnvioEscrituraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EnvioEscrituraComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnvioEscrituraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
