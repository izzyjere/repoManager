// repo.effects.ts
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY, of } from 'rxjs';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { GithubApiService } from '../../services/github-api.service';
import * as repoActions from '../actions/repo.actions';

@Injectable()
export class RepoEffects {

  loadRepo$ = createEffect(() => this.actions$.pipe(
    ofType(repoActions.loadRepo),
    mergeMap((action) => this.githubApiService.getRepositories(action.username)
      .pipe(
        map(data => repoActions.loadRepoSuccess({ repo: data })),
        catchError(error => of(repoActions.loadRepoFailure({ error })))
      ))
    )
  );

  constructor(
    private actions$: Actions,
    private githubApiService: GithubApiService
  ) {}
}
