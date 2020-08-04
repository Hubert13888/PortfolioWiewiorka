import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjCatComponent } from './proj-cat.component';

describe('ProjCatComponent', () => {
  let component: ProjCatComponent;
  let fixture: ComponentFixture<ProjCatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjCatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjCatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
