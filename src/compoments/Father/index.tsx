import React from 'react'
import Child from '../Child'

// 声明props
interface IProps {
  name?: string
  age?: number
}

// 声明state
interface IState {
  name: string
  age: number
  addAge: () => void
}

export default class Father extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props)
    this.state = {
      name: props.name ? props.name : 'Tom',
      age: props.age ? props.age : 25,
      addAge: this.addAge.bind(this),
    }
  }

  addAge() {
    this.setState((oldState: IState) => ({
      age: oldState.age + 1,
    }))
  }

  render() {
    return (
      <div>
        <div>name: {this.state.name}</div>
        <div>age: {this.state.age}</div>
        <Child name="苹果" age={20} addAge={this.state.addAge} />
      </div>
    )
  }
}
