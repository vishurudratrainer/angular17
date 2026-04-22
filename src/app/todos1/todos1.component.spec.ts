import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Todos1Component } from './todos1.component';

describe('Todos1Component', () => {
  let component: Todos1Component;
  let fixture: ComponentFixture<Todos1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Todos1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Todos1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
