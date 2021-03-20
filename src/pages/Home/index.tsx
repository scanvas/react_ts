import React from 'react'
import { shallowEqual, useSelector } from 'react-redux'
import { IState } from '../../store/reduxTypes'
import './index.less'

const Home: React.FC<unknown> = () => {
  const { name, num }: IState = useSelector(
    (state: IState) => ({
      name: state.name,
      num: state.num,
    }),
    shallowEqual,
  )
  return (
    <div className="whdsj-home">
      <div className="header">
        <div className="header-main main-w">home{name}</div>
      </div>
    </div>
  )
}

export default React.memo(Home)
