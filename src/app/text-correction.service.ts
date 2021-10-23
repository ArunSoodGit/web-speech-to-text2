import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {map} from 'rxjs/operators';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class TextCorrectionService {
  private headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    }
  );
  private key = 'ce479e2f67';

  constructor(private httpClient: HttpClient) {
  }

  correctText(text: string): any {
    const params = new HttpParams()
      .set('key', 'ce479e2f67')
      .set('text', text);
    console.log('to sent ' + text);
    return axios.get('https://api.gios.gov.pl/pjp-api/rest/station/findAll').then(response => {
      console.log(response);
      }
    );
    // return this.httpClient.get<any>('https://api.ikorektor.pl', {params, headers: this.headers});
    // return this.httpClient.get('https://api.gios.gov.pl/pjp-api/rest/station/findAll').pipe(map(data => {
    // })).subscribe(result => {
    //   console.log(result);
    // });
  }
}
