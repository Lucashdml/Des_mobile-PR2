import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Modulo2Component } from './modulo2.component';

describe('Modulo2Component', () => {
  let component: Modulo2Component;
  let fixture: ComponentFixture<Modulo2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Modulo2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Modulo2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
