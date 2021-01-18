import { EActionTypes } from './actions';
import { initialState, IRunningStackState } from './models';

const convertPayload = (data: any = {}): IRunningStackState[] => {
  const result = [];
  let i = 0;
  for (const [key, value] of Object.entries(data)) {
    (value['Time left'] > 0) && result.push({
      id: i++,
      target: value['Target'],
      time: value['Time left'],
      method: key
    });
  }
  return result;
};

export function reducers(state = initialState, action) {
  switch (action.type) {
    case EActionTypes.GET_RUNNING_ATTACK_SUCCESS: {
      return {
        ...state,
        runningAttack: convertPayload(action.payload)
      };
    }
    default:
      return state;
  }
}
