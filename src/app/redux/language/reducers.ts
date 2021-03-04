import { EActionTypes } from './actions';
import { initialState } from './models';
import { LocalStorageService } from "../../services/local-storage";
const localStorageInstance = new LocalStorageService();

export function reducers(state = initialState, action) {
  switch (action.type) {
    case EActionTypes.SET_LANGUGE_SUCCESS: {
      localStorageInstance.setItem('lang', action.payload)
      return action.payload;
    }

    default:
      return state;
  }
}
