import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecureCallComponent } from './secure-call.component';

describe('SecureCallComponent', () => {
  let component: SecureCallComponent;
  let fixture: ComponentFixture<SecureCallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecureCallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecureCallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
