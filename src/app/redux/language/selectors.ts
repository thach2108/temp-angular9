import { createSelector } from '@ngrx/store';

import { IAppState } from '../app.state';

const stateSelected = (state: IAppState) => {
  return state.language;
};

export const select = createSelector(stateSelected, (state: any) => state);
