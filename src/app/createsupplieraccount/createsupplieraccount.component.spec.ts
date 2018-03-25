import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatesupplieraccountComponent } from './createsupplieraccount.component';

describe('CreatesupplieraccountComponent', () => {
  let component: CreatesupplieraccountComponent;
  let fixture: ComponentFixture<CreatesupplieraccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatesupplieraccountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatesupplieraccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
