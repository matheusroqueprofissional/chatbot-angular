import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatSugestionsComponent } from './chat-sugestions.component';

describe('ChatSugestionsComponent', () => {
  let component: ChatSugestionsComponent;
  let fixture: ComponentFixture<ChatSugestionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChatSugestionsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChatSugestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
