import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChaveComponent } from './chave.component';

describe('ChaveComponent', () => {
  let component: ChaveComponent;
  let fixture: ComponentFixture<ChaveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChaveComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
