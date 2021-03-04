import { ActionReducerMap } from '@ngrx/store';

import {
  IState as AuthState,
  reducers as AuthReducers,
  initialState as initialAuthState
} from './auth';

import {
  reducers as LanguageReducers,
  initialState as initialLanguageState
} from './language';

//
import {
  IState as ErrorsState,
  reducers as ErrorsReducers,
  initialState as initialErrorsState
} from './errors';

import {
  IState as DashboardState,
  reducers as DashboardReducers,
  initialState as initialDashboardState
} from './dashboard';

import {
  IState as AttackPanelState,
  reducers as AttackPanelReducers,
  initialState as initialAttackPanelState
} from './attack-panel';

/**
 * define state
 */
export interface IAppState {
  errors: ErrorsState;
  language: string;
  auth: AuthState;
  dashboard: DashboardState;
  attackPanel: AttackPanelState;
}

export const appReducers: ActionReducerMap<IAppState, any> = {
  errors: ErrorsReducers,
  language: LanguageReducers,
  auth: AuthReducers,
  dashboard: DashboardReducers,
  attackPanel: AttackPanelReducers,
};

export const initialAppState: IAppState = {
  errors: initialErrorsState,
  language: initialLanguageState,
  auth: initialAuthState,
  dashboard: initialDashboardState,
  attackPanel: initialAttackPanelState
};

export function getInitialState(): IAppState {
  return initialAppState;
}
