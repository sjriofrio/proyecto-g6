import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EscrituraComponent } from './escritura.component';

describe('EscrituraComponent', () => {
  let component: EscrituraComponent;
  let fixture: ComponentFixture<EscrituraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EscrituraComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EscrituraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
