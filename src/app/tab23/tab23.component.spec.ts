import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Tab23Component } from './tab23.component';

describe('Tab23Component', () => {
  let component: Tab23Component;
  let fixture: ComponentFixture<Tab23Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Tab23Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Tab23Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
