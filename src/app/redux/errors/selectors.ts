import { createSelector } from '@ngrx/store';
import { IAppState } from '../app.state';
import { IState } from './models';

const stateSelected = (state: IAppState) => {
  return state.errors;
};

export const select = createSelector(stateSelected, (state: IState) => state);
