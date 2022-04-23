import {Component, ElementRef, ViewChild} from '@angular/core';
import {AzureSpeechService} from '../services/azure-speech.service';
import {ContentChange, SelectionChange} from 'ngx-quill';
import jsPDF from 'jspdf';
import { saveAs } from 'file-saver';
@Component({
  selector: 'app-speech',
  templateUrl: './speech.component.html',
  styleUrls: ['./speech.component.scss']
})
export class SpeechComponent {

  @ViewChild('pdfTable', {static: false}) pdfTable: ElementRef;
  languages = [
    {code: 'pl-PL', language: 'Polish (Poland)'},
    {code: 'en-GB', language: 'English (United Kingdom)'},
    {code: 'en-US', language: 'English (United States)'},
    {code: 'de-DE', language: 'German (Germany)'},
  ];

  selectedLanguage = 'pl-PL';
  record = true;
  test: any;
  micClass = 'mic';
  speechHasStarted = false;
  hasContent: boolean;
  transcript: any;
  quillConfig: any;

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

  onSelectionChanged($event: SelectionChange): void {
  }

  onContentChanged($event: ContentChange): void {

  }

  // textCorrection(): void {
  //   this.textCorrectionService.correctText(this.service.text).subscribe(res => {
  //     this.service.finaleText = res.text;
  //     console.log('data response', res.text);
  //   });
  saveNoteAsPdfFile(): void {
    const pdfTable = this.pdfTable.nativeElement;
    const pdf = new jsPDF();
    console.log(this.azureService.text3);
    // const file = new File([this.azureService.text3], 'myNote.txt', {type: 'text/plain;charset=utf-8'});
    // saveAs(file, 'myNote.docx');
    pdf.html(pdfTable.innerHTML);

    pdf.save('myNote.pdf');


  }

  saveNoteAsDocxFile(): void {
    console.log(this.azureService.text3);
    const file = new File([this.azureService.text3], 'myNote.docx', {type: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'});
    saveAs(file, 'myNote.docx');
  }
}
