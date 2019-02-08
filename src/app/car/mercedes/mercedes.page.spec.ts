import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MercedesPage } from './mercedes.page';

describe('MercedesPage', () => {
  let component: MercedesPage;
  let fixture: ComponentFixture<MercedesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MercedesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MercedesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
