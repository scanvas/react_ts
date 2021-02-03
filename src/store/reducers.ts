import { IState, IAction, ActionTpyes } from './reduxTypes'

const defaultState: IState = {
  num: 10,
  name: 'shawn',
}

const reducer = (state: IState = defaultState, action: IAction): IState => {
  const copyState: IState = JSON.parse(JSON.stringify(state))
  switch (action.type) {
    case ActionTpyes.ADD:
      copyState.num = action.data
      return copyState
    default:
      return copyState
  }
}

export default reducer
