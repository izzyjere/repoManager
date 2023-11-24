import { createAction, props } from '@ngrx/store';
import { GitHubRepository } from '../../models/repo';


export const loadRepo = createAction('[Repo] Load Repo', props<{ username: string }>());

export const loadRepoSuccess = createAction('[Repo] Load Repo Success', props<{ repo: GitHubRepository }>());
export const loadRepoFailure = createAction('[Repo] Load Repo Failure', props<{ error: any }>());
