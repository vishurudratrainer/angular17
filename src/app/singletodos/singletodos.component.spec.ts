import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingletodosComponent } from './singletodos.component';

describe('SingletodosComponent', () => {
  let component: SingletodosComponent;
  let fixture: ComponentFixture<SingletodosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SingletodosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SingletodosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
