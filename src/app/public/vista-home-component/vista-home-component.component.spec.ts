import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaHomeComponentComponent } from './vista-home-component.component';

describe('VistaHomeComponentComponent', () => {
  let component: VistaHomeComponentComponent;
  let fixture: ComponentFixture<VistaHomeComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VistaHomeComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VistaHomeComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
