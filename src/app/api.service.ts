import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
import 'rxjs/add/operator/map';

@Injectable()
export class ApiService {

  baseUrl: string = "https://api.github.com"

  constructor(public http: HttpClient) {

  }

  getRepositories(username?: string, type?: string): Observable<any> {
    let url = this.baseUrl + '/user/repos';

    if (username) {
      url = this.baseUrl + `/users/${username}/repos`;
    }

    return this.http.get<any[]>(url);
  }

  getIssues(username: string, repo: string): Observable<any> {

    let url = this.baseUrl + `/repos/${username}/${repo}/issues`;

    return this.http.get<any[]>(url);
  }
  
}
