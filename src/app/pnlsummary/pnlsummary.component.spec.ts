import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PnlsummaryComponent } from './pnlsummary.component';

describe('PnlsummaryComponent', () => {
  let component: PnlsummaryComponent;
  let fixture: ComponentFixture<PnlsummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PnlsummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PnlsummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
