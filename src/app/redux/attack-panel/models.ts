export interface IRunningStackState {
  id: number;
  target: string;
  time: number;
  method: string;
}

export interface IState {
  runningAttack: IRunningStackState[];
  attackPanel: any[];
}

export const initialState: IState = {
  runningAttack: [
    {
      id: 1,
      target: '',
      time: 0,
      method: ''
    }
  ],
  attackPanel: [
    {
      groupLabel: 'Layer 4 Methods',
      select: [
        { value: 'udp-flood', label: 'UDP-FLOOD' },
      ]
    }, {
      groupLabel: 'Layer 7 Methods',
      select: [
        { value: 'xml-rpc-pingback', label: 'XML-RPC-PINGBACK' },
        { value: 'http-flood', label: 'HTTP-FLOOD' },
      ]
    }
  ]
};
