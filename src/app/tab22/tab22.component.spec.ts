import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Tab22Component } from './tab22.component';

describe('Tab22Component', () => {
  let component: Tab22Component;
  let fixture: ComponentFixture<Tab22Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Tab22Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Tab22Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
