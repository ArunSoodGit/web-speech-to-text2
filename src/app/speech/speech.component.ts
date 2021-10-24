import {Component, OnInit} from '@angular/core';
import {VoiceRecognitionService} from '../voice-recognition.service';
import {TextCorrectionService} from '../text-correction.service';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';

@Component({
  selector: 'app-speech',
  templateUrl: './speech.component.html',
  styleUrls: ['./speech.component.scss']
})
export class SpeechComponent implements OnInit {
  public Editor = ClassicEditor;
  name = this.service.text2;
  record = true;
  public config = {
    language: 'pl'
  };
  test: any;
  micClass = 'mic';

  constructor(private textCorrectionService: TextCorrectionService,
              public service: VoiceRecognitionService
  ) {
    this.service.init();
  }

  ngOnInit(): void {
  }

  startService(): void {
    if (this.record === true) {
      this.record = false;
      this.micClass = 'mic_anim';
      this.service.start();
    } else {
      this.record = true;
      this.micClass = 'mic';
      this.service.stop();
    }
  }

  stopService(): void {
    this.service.stop();

  }

  textCorrection(): void {
    this.textCorrectionService.correctText(this.service.text).subscribe(res => {
      this.service.finaleText = res.text;
      console.log('data response', res.text);
    });
  }

  onChange(): void {
    console.log('t');
    // this.name = this.service.text2;

  }

  ready() {
    this.name = this.service.text2;
    console.log('t');
  }
}
