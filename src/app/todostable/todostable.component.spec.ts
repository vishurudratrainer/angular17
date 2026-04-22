import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodostableComponent } from './todostable.component';

describe('TodostableComponent', () => {
  let component: TodostableComponent;
  let fixture: ComponentFixture<TodostableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TodostableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TodostableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
