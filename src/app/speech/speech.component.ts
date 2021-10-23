import {Component, OnInit} from '@angular/core';
import {VoiceRecognitionService} from '../voice-recognition.service';
import {TextCorrectionService} from '../text-correction.service';

@Component({
  selector: 'app-speech',
  templateUrl: './speech.component.html',
  styleUrls: ['./speech.component.scss']
})
export class SpeechComponent implements OnInit {
  text = '';

  constructor(private textCorrectionService: TextCorrectionService,
              public service: VoiceRecognitionService
  ) {
    this.service.init();
  }

  ngOnInit(): void {
  }

  startService(): void {
    this.service.start();
  }

  stopService(): void {
    this.service.stop();
    this.textCorrectionService.correctText(this.text).subscribe(data =>
      console.log(data));
  }
}
