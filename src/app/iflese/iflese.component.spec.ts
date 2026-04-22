import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IfleseComponent } from './iflese.component';

describe('IfleseComponent', () => {
  let component: IfleseComponent;
  let fixture: ComponentFixture<IfleseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IfleseComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IfleseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
