import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Tab21Component } from './tab21.component';

describe('Tab21Component', () => {
  let component: Tab21Component;
  let fixture: ComponentFixture<Tab21Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Tab21Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Tab21Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
