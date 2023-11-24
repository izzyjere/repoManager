import { createFeatureSelector, createSelector } from '@ngrx/store';

export const selectRepoState = createFeatureSelector<any>('repo');

export const selectRepo = createSelector(
  selectRepoState,
  (state) => state
);
