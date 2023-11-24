import { Component, OnInit, Input } from '@angular/core';
import { GitHubRepository } from '../../models/entities';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-repo-card',
  templateUrl: './repo-card.component.html',
  styleUrls: ['./repo-card.component.css']
})
export class RepoCardComponent implements OnInit {
  constructor(private httpClient: HttpClient) { }

  @Input() repoModel!: Observable<GitHubRepository>;
  languages: LangInfo[] = [];

  ngOnInit() {
    this.repoModel.subscribe(repo => {
      // Replace 'YOUR_GITHUB_TOKEN' with your GitHub token if needed
      const url = `https://api.github.com/repos/${repo.owner.login}/${repo.name}/languages`;
      
      this.httpClient.get<LanguageData>(url).subscribe(data => {
        const totalBytes: number = Object.values(data).reduce((acc, val) => acc + val, 0);
      
        this.languages = Object.entries(data).map(([language, bytes]) => {
          return {
            language,
            percentage: (bytes / totalBytes) * 100
          };
        });
      });      
    });
  }
  
}

export interface LangInfo {
  language: string;
  percentage: number;
}
interface LanguageData {
  [key: string]: number;
}
