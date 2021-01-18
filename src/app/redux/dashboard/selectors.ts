import { createSelector } from '@ngrx/store';
import { IAppState } from '../app.state';
import { IState } from './models';

const stateSelected = (state: IAppState) => {
  return state.dashboard;
};

export const selectServerUsageAndStatus = createSelector(stateSelected, (state: IState) => state.serverUsageAndStatus);
export const selectRecentUpdates = createSelector(stateSelected, (state: IState) => state.recentUpdates);
export const selectAPIsUsageAndStatus = createSelector(stateSelected, (state: IState) => state.APIsUsageAndStatus);
