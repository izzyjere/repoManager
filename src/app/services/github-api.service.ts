import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GitHubRepository } from '../models/repo';

@Injectable({
  providedIn: 'root'
})
export class GithubApiService {
  private apiUrl = 'https://api.github.com/users/';

  constructor(private http: HttpClient) { }

  getRepositories(username: string): Observable<GitHubRepository> {
    return this.http.get<GitHubRepository>(`${this.apiUrl}${username}/repos`);
  }
}
