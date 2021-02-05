import React from 'react'

interface IProps {
  name?: string
  age?: number
}

export default class Child2 extends React.Component<IProps> {
  constructor(props: IProps) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div>
        <div>name: {this.props.name}</div>
        <div>age: {this.props.age}</div>
      </div>
    )
  }
}
