import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SparklsComponent } from './sparkls.component';

describe('SparklsComponent', () => {
  let component: SparklsComponent;
  let fixture: ComponentFixture<SparklsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SparklsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SparklsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
