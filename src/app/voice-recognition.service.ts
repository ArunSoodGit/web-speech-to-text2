import {Injectable} from '@angular/core';
import {TextCorrectionService} from './text-correction.service';

declare var webkitSpeechRecognition: any;

@Injectable({
  providedIn: 'root'
})
export class VoiceRecognitionService {

  recognition = new webkitSpeechRecognition();
  isStoppedSpeechRecog = false;
  public text = '';
  tempWords;
  text2;

  constructor(private textCorrectionService: TextCorrectionService) {
  }

  init(): void {

    this.recognition.interimResults = true;
    this.recognition.lang = 'pl-PL';

    this.recognition.addEventListener('result', (e) => {
      const transcript = Array.from(e.results)
        .map((result) => result[0])
        .map((result) => result.transcript)
        .join('');
      this.tempWords = transcript;
      this.text2 = transcript;
      console.log(transcript);
    });
  }

  start(): void {
    this.isStoppedSpeechRecog = false;
    this.recognition.start();
    console.log('Speech recognition started');
    this.recognition.addEventListener('end', (condition) => {
      if (this.isStoppedSpeechRecog) {
        this.recognition.stop();
        console.log('End speech recognition');
      } else {
        this.wordConcat();
        this.recognition.start();
      }
    });
  }

  stop(): void {
    this.isStoppedSpeechRecog = true;
    this.wordConcat();
    this.recognition.stop();
    console.log('End speech recognition');

  }

  wordConcat(): void {
    this.text = this.text + ' ' + this.tempWords + '.';
    this.tempWords = '';

  }
}
