import React from 'react'
import { shallowEqual, useSelector, useDispatch } from 'react-redux'
import { IState } from './store/reduxTypes'
import { Get_ADD_Action } from './store/actionCreators'
import AppRouter from './routes'
import './App.less'

function App() {
  const { name, num }: IState = useSelector(
    (state: IState) => ({
      name: state.name,
      num: state.num,
    }),
    shallowEqual,
  )
  const dispatch = useDispatch()

  const changeNum = () => {
    dispatch(Get_ADD_Action(num + 1))
  }

  return (
    <div className="App">
      {/* hi {name} {num}
      <button type="button" onClick={changeNum}>
        click
      </button>
      <Button type="primary">Button</Button>
      <Father name="锤子" /> */}
      <AppRouter />
    </div>
  )
}

export default App
