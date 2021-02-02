import { IAction, ActionTpyes } from './reduxTypes'

export function Get_ADD_Action(data: any): IAction {
  return {
    type: ActionTpyes.ADD,
    data,
  }
}
