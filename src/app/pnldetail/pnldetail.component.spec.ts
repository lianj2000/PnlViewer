import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PnldetailComponent } from './pnldetail.component';

describe('PnldetailComponent', () => {
  let component: PnldetailComponent;
  let fixture: ComponentFixture<PnldetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PnldetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PnldetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
