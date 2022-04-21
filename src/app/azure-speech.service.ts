import {Injectable} from '@angular/core';
import {
  CancellationDetails,
  CancellationReason,
  ResultReason,
  SpeechConfig,
  SpeechRecognizer
} from 'microsoft-cognitiveservices-speech-sdk';
import {HttpClient} from '@angular/common/http';

class SpeechRecognitionResultModel {
  isFinal: boolean;
  result: any;
}

@Injectable({
  providedIn: 'root'
})
export class AzureSpeechService {
  asRecognitionStarted: boolean;
  private speechConfig: SpeechConfig;
  private speechRecognizer: SpeechRecognizer;
  private text2: string;

  constructor(private httpClient: HttpClient) {
    this.speechConfig = SpeechConfig.fromSubscription('e02cb196c708407ca4bfc365474b4afa', 'NorthEurope');
    this.speechConfig.speechRecognitionLanguage = 'pl-PL';
    this.speechConfig.enableDictation();
    this.speechRecognizer = new SpeechRecognizer(this.speechConfig);
  }

  startContinuousRecognition(): void {
    try {
      this.speechRecognizer.startContinuousRecognitionAsync(() => {
        console.log('Recognition started');
        this.speechRecognizer.recognizing = (s, e) => {
          console.log('recognizing text', e.result.text);
          this.text2 = e.result.text;
        };
        this.asRecognitionStarted = true;
      });
      this.speechRecognizer.recognized = (s, e) => {
        if (e.result.reason === ResultReason.RecognizedSpeech) {
          console.log(`RECOGNIZED: Text=${e.result.text}`);
          // const subs = generateSubtitles(e.result, settings)
          // results.push(...subs)
        } else if (e.result.reason === ResultReason.NoMatch) {
          console.log('NOMATCH: Speech could not be recognized.');
        } else {
          console.log('SOMETHING DIFFERENT', e.result);
        }
      };
    } catch (e) {
      console.log('error', e);
    }

  }

  //
  // stopRecognition(): void  {
  //   this.recognizer.stopContinuousRecognitionAsync(() => {
  //     this.recognizer.close();
  //   });
  // }
  //
  // private handleRecognizingResponse(res: any): void  {
  //   this.speechRecognitionResult.next({isFinal: false, result: res.result});
  // }
  //
  // private handleRecognizedResponse(res: any): void {
  //   this.speechRecognitionResult.next({isFinal: true, result: res.result});
  // }
  //
  // private handleCanceled(res: any): void {
  //   console.log('error', res);
  // }


  public speechToText(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.speechRecognizer.recognizeOnceAsync(result => {
        console.log(result.text);
        let text = '';
        switch (result.reason) {
          case ResultReason.RecognizedSpeech:
            text = result.text;
            break;
          case ResultReason.NoMatch:
            text = 'Speech could not be recognized.';
            reject(text);
            break;
          case ResultReason.Canceled:
            const cancellation = CancellationDetails.fromResult(result);
            text = 'Cancelled: Reason= ' + cancellation.reason;
            if (cancellation.reason === CancellationReason.Error) {
              text = 'Canceled: ' + cancellation.ErrorCode;
            }
            reject(text);
            break;
        }
        resolve(text);
      });
    });
  }
}
