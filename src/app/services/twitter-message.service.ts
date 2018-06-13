import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class TwitterMessageService {
  apiURL = 'http://localhost:3000/twitter-messages';

  constructor(private http: HttpClient) { }

  getAllMessages(): Observable<any> {
    return this.http.get(this.apiURL);
  }
}
