import {
  IPayload as IMiddlewarePayload,
  IAction as IMiddlewareAction,
  EActionTypes as EMiddlewareActionTypes,
} from '../_middleware';

export enum EActionTypes {
  GET_RUNNING_ATTACK_SUCCESS = '[AT_PANEL]_GET_RUNNING_ATTACK_SUCCESS'
}

export interface IQuery {
  // add something
  method: string;
  port?: number;
  url: string;
  attacktime: number;
}

export class GetRunningAttack implements IMiddlewareAction {
  public readonly type = EMiddlewareActionTypes.CALL_API;
  readonly payload: IMiddlewarePayload;

  constructor(
    payload?: {},
    next?: (res?: any) => void,
    nextError?: (error?: any) => void
  ) {
    this.payload = {
      url: 'getdata',
      method: 'GET',
      params: payload,
      successType: EActionTypes.GET_RUNNING_ATTACK_SUCCESS,
      afterSuccess: next,
      afterError: nextError
    };
  }
}

export class Attack implements IMiddlewareAction {
  public readonly type = EMiddlewareActionTypes.CALL_API;
  readonly payload: IMiddlewarePayload;

  constructor(
    payload?: IQuery,
    next?: (res?: any) => void,
    nextError?: (error?: any) => void
  ) {
    this.payload = {
      url: 'command',
      method: 'GET',
      params: payload,
      afterSuccess: next,
      afterError: nextError
    };
  }
}

export class StopAttack implements IMiddlewareAction {
  public readonly type = EMiddlewareActionTypes.CALL_API;
  readonly payload: IMiddlewarePayload;

  constructor(
    payload?: {
      method: string,
      module: string
    },
    next?: (res?: any) => void,
    nextError?: (error?: any) => void
  ) {
    this.payload = {
      url: 'command',
      method: 'GET',
      params: payload,
      afterSuccess: next,
      afterError: nextError
    };
  }
}

