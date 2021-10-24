import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

const API_URL = 'https://webspellchecker-webspellcheckernet.p.rapidapi.com/ssrv.cgi';
const headers = new HttpHeaders().set('Content-Type', 'application/json');

@Injectable({
  providedIn: 'root'
})
export class TextCorrectionService {

  private key = 'ce479e2f67';

  constructor(private httpClient: HttpClient) {
  }

  correctText(text: string): any {
    console.log('to sent ' + text);
    const url = `http://localhost:8081/correction/${text}`;

    return this.httpClient.get<string>(url, {headers});
  }

  public get2(url): Observable<any> {
    return this.httpClient.get(API_URL).pipe(map(res => res));
  }
}
