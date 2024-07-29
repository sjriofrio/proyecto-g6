import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UplaodComprobanteComponent } from './uplaod-comprobante.component';

describe('UplaodComprobanteComponent', () => {
  let component: UplaodComprobanteComponent;
  let fixture: ComponentFixture<UplaodComprobanteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UplaodComprobanteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UplaodComprobanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
