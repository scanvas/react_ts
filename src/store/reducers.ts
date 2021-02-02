import { IState, IAction } from './reduxTypes'

const defaultState: IState = {
  num: 10,
  name: 'sokayo',
}

const reducer = (state: IState = defaultState, action: IAction): IState => {
  const copyState: IState = JSON.parse(JSON.stringify(state))
  switch (action.type) {
    default:
      return copyState
  }
}

export default reducer
