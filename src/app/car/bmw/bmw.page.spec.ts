import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BmwPage } from './bmw.page';

describe('BmwPage', () => {
  let component: BmwPage;
  let fixture: ComponentFixture<BmwPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BmwPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BmwPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
