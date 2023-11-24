import { createReducer, on } from '@ngrx/store';
import * as repoActions from '../actions/repo.actions';

export const initialState = {};

export const repoReducer = createReducer(
  initialState,
  on(repoActions.loadRepoSuccess, (state, { repo }) => ({ ...repo })),
  on(repoActions.loadRepoFailure, (state, { error }) => ({ error: error }))
);
