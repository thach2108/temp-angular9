import { Action } from '@ngrx/store';

export enum EActionTypes {
  SET_LANGUGE_SUCCESS = '[LANGUAGE]_SET_LANGUGE_SUCCESS'
}

export interface IQueryAuth {
  id: number;
}

export class SetLanguage implements Action {
  public readonly type = EActionTypes.SET_LANGUGE_SUCCESS;
  constructor(readonly payload: string) {}
}
