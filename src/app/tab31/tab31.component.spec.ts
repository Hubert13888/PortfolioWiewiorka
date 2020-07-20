import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Tab31Component } from './tab31.component';

describe('Tab31Component', () => {
  let component: Tab31Component;
  let fixture: ComponentFixture<Tab31Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Tab31Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Tab31Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
