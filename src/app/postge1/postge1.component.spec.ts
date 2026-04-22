import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Postge1Component } from './postge1.component';

describe('Postge1Component', () => {
  let component: Postge1Component;
  let fixture: ComponentFixture<Postge1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Postge1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Postge1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
