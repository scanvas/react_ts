export enum ActionTpyes {
  ADD,
  SHOW,
}

export interface IState {
  num: number
  name: string
}

export interface IAction {
  type: ActionTpyes
  data?: any
}
