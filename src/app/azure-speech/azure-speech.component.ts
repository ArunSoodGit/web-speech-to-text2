import {Component, OnInit} from '@angular/core';
import {AzureSpeechService} from '../azure-speech.service';

@Component({
  selector: 'app-azure-speech',
  templateUrl: './azure-speech.component.html',
  styleUrls: ['./azure-speech.component.scss']
})
export class AzureSpeechComponent implements OnInit {

  constructor(public azureSpeechService: AzureSpeechService) {
  }

  ngOnInit(): void {
  }

//   public async Speech2Text(): Promise<any> {
//     await this.azureSpeechService.speechToText().then((res: string) => {
//       console.log(res);
//     })
//       .catch((res: string) => {
//         // this._snackBar.open(res, "okay", { duration: 3000 });
//       })
//       .finally(() => console.log('test'));
//   }
}
