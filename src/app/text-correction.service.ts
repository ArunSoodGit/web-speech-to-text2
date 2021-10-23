import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TextCorrectionService {
  private headers = new HttpHeaders({'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Credentials': 'true',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE'});
  private key = 'ce479e2f67';

  constructor(private httpClient: HttpClient) {
  }

  correctText(text: string): any {
    const params = new HttpParams()
      .set('key', 'ce479e2f67')
      .set('text', text);
    console.log('to sent ' + text);
    return this.httpClient.get<any>('https://api.ikorektor.pl', {params, headers: this.headers});
  }
}
