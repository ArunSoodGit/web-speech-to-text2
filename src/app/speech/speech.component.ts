import {Component} from '@angular/core';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import {AzureSpeechService} from '../services/azure-speech.service';
import {ContentChange, SelectionChange} from 'ngx-quill';

@Component({
  selector: 'app-speech',
  templateUrl: './speech.component.html',
  styleUrls: ['./speech.component.scss']
})
export class SpeechComponent {
  languages = [
    {code: 'pl-PL', language: 'Polish (Poland)'},
    {code: 'en-GB', language: 'English (United Kingdom)'},
    {code: 'en-US', language: 'English (United States)'},
    {code: 'de-DE', language: 'German (Germany)'},
  ];

  selectedLanguage = 'pl-PL';
  public Editor = ClassicEditor;
  record = true;
  public config = {
    language: 'pl'
  };
  test: any;
  micClass = 'mic';
  // }
  speechHasStarted = false;
  hasContent: boolean;
  transcript: any;

  constructor(public azureService: AzureSpeechService) {
  }

  startService(): void {
    if (this.record === true) {
      this.record = false;
      this.micClass = 'mic_anim';
      console.log(this.selectedLanguage);
      this.azureService.startContinuousRecognition(this.selectedLanguage);
    } else {
      this.record = true;
      this.micClass = 'mic';
      this.azureService.stopRecognition();
    }
  }


  // textCorrection(): void {
  //   this.textCorrectionService.correctText(this.service.text).subscribe(res => {
  //     this.service.finaleText = res.text;
  //     console.log('data response', res.text);
  //   });
  // }
  quillConfig: any;

  onSelectionChanged($event: SelectionChange) {
    console.log(this.azureService.text3);
  }

  onContentChanged($event: ContentChange) {

  }
}
