import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SquareegComponent } from './squareeg.component';

describe('SquareegComponent', () => {
  let component: SquareegComponent;
  let fixture: ComponentFixture<SquareegComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SquareegComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SquareegComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
