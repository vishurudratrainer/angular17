import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Todos3Component } from './todos3.component';

describe('Todos3Component', () => {
  let component: Todos3Component;
  let fixture: ComponentFixture<Todos3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Todos3Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Todos3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
