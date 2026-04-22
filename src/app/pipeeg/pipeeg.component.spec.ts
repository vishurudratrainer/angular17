import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PipeegComponent } from './pipeeg.component';

describe('PipeegComponent', () => {
  let component: PipeegComponent;
  let fixture: ComponentFixture<PipeegComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PipeegComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PipeegComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
