import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable()
export class ApiService {

  baseUrl: string = "https://api.github.com"

  constructor(public http: HttpClient) {

  }

  getRepositories(username?: string, type?: string) {
    let url = this.baseUrl + '/user/repos';

    if (username) {
      url = this.baseUrl + `/users/${username}/repos`;
    }

    return this.http.get(url);
  }
}
