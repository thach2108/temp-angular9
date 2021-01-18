import { EActionTypes as EActionTypesMiddeware } from '../_middleware';
import { initialState } from './models';

export function reducers(state = initialState, action) {
  switch (action.type) {
    case EActionTypesMiddeware.REQUEST_ERROR: {
      return {
        ...state,
        ...action.payload
      };
    }
    default:
      return state;
  }
}
