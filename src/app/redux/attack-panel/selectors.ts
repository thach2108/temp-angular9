import { createSelector } from '@ngrx/store';
import { IAppState } from '../app.state';
import { IState } from './models';

const stateSelected = (state: IAppState) => {
  return state.attackPanel;
};

export const selectRunningAttack = createSelector(stateSelected, (state: IState) => state.runningAttack);
export const selectAttackPanel = createSelector(stateSelected, (state: IState) => state.attackPanel);
