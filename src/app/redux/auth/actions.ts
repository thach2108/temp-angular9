import {
  IPayload as IMiddlewarePayload,
  IAction as IMiddlewareAction,
  EActionTypes as EMiddlewareActionTypes,
} from '../_middleware';

export enum EActionTypes {
  GET_PROFILE_AUTH_SUCCESS = '[AUTH]_GET_PROFILE_AUTH_SUCCESS'
}

export interface IQueryAuth {
  id: number;
}

export class GetProfileAuth implements IMiddlewareAction {
  public readonly type = EMiddlewareActionTypes.CALL_API;
  readonly payload: IMiddlewarePayload;

  constructor(
    payload?: IQueryAuth,
    next?: (res?: any) => void,
    nextError?: (error?: any) => void
  ) {
    this.payload = {
      url: '',
      otherUrl: `https://my-json-server.typicode.com/typicode/demo/profile`,
      method: 'GET',
      params: payload,
      successType: EActionTypes.GET_PROFILE_AUTH_SUCCESS,
      afterSuccess: next,
      afterError: nextError
    };
  }
}

export class LogoutAllServices implements IMiddlewareAction {
  public readonly type = EMiddlewareActionTypes.CALL_API;
  readonly payload: IMiddlewarePayload;

  constructor(next?: (res?: any) => void, nextError?: (error?: any) => void) {
    this.payload = {
      url: '...',
      method: 'POST',
      afterSuccess: next,
      afterError: nextError
    };
  }
}

export class UpdateProfileAuth implements IMiddlewareAction {
  public readonly type = EMiddlewareActionTypes.CALL_API;
  readonly payload: IMiddlewarePayload;

  constructor(
    payload?: any,
    next?: (res?: any) => void,
    nextError?: (error?: any) => void
  ) {
    this.payload = {
      url: '...',
      data: payload,
      method: 'PUT',
      afterSuccess: next,
      afterError: nextError
    };
  }
}
