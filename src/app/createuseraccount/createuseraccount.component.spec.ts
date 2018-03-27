import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateuseraccountComponent } from './createuseraccount.component';

describe('CreateuseraccountComponent', () => {
  let component: CreateuseraccountComponent;
  let fixture: ComponentFixture<CreateuseraccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateuseraccountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateuseraccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
