import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AzureSpeechComponent } from './azure-speech.component';

describe('AzureSpeechComponent', () => {
  let component: AzureSpeechComponent;
  let fixture: ComponentFixture<AzureSpeechComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AzureSpeechComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AzureSpeechComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
