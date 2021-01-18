

import { Injectable } from '@angular/core';
import { Effect, ofType, Actions } from '@ngrx/effects';
import { Action, Store } from '@ngrx/store';
import { of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';

import { MiddleService } from './_services';

export type Method = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';

export interface IPayload {
  readonly url: string;
  readonly otherUrl?: string;
  readonly params?: object;
  readonly data?: object;
  readonly method?: Method;
  readonly headers?: object;
  readonly noLoading?: boolean;
  readonly beforeCallType?: string;
  readonly afterCallType?: string;
  readonly successType?: string;
  readonly errorType?: string;
  readonly apiType?: string;
  afterSuccess?(res?: any, params?: any): void;
  afterError?(error?: any, params?: any): void;
}

export interface IAction {
  readonly payload: IPayload;
}

export enum EActionTypes {
  CALL_API = '[MIDDLEWARE]_CALL_API',
  REQUEST_ERROR = '[MIDDLEWARE]_REQUEST_ERROR'
}

@Injectable()
export class MiddleEffects {
  constructor(
    private _actions$: Actions<Action>,
    private _service: MiddleService,
    private _store$: Store<any>
  ) { }

  @Effect()
  callApi = this._actions$.pipe(
    ofType(EActionTypes.CALL_API),
    mergeMap((action: IAction) => {
      const {
        successType = 'SUCCESS',
        beforeCallType,
        afterCallType,
        afterSuccess = f => f,
        errorType,
        afterError = f => f,
        ...rest
      } = action.payload;

      if (beforeCallType) {
        this._store$.dispatch({ type: beforeCallType });
      }

      return this._service.callApi(rest).pipe(
        map(res => {
          if (afterCallType) {
            this._store$.dispatch({ type: afterCallType });
          }

          afterSuccess(res, rest.params);
          return { type: successType, payload: res };
        }),
        catchError(error => {
          if (afterCallType) {
            this._store$.dispatch({ type: afterCallType });
          }
          if (errorType) {
            this._store$.dispatch({ type: errorType, payload: error });
          }
          afterError(error, rest.params);
          return of({ type: EActionTypes.REQUEST_ERROR, payload: error });
        })
      );
    })
  );
}
