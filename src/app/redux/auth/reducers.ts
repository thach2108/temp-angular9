import { EActionTypes } from './actions';
import { initialState } from './models';

export function reducers(state = initialState, action) {
  switch (action.type) {
    case EActionTypes.GET_PROFILE_AUTH_SUCCESS: {
      return {
        ...state,
        ...action.payload
      };
    }

    default:
      return state;
  }
}
