import React from 'react'

import { GET_TOP_LIST } from '../../api/apiLists'

interface IProps {
  name?: string
  age?: number
}

interface IState {
  search: () => void
}

export default class Child2 extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props)
    this.state = {
      search: this.search.bind(this),
    }
  }

  search() {
    console.log(this)
    GET_TOP_LIST({ rid: '336355127' })
      .then((res: any) => {
        console.log(res.data.programs)
      })
      .catch((error: any) => {
        console.log(error)
      })
  }

  render() {
    return (
      <div>
        <div>name: {this.props.name}</div>
        <div>age: {this.props.age}</div>
        <button type="button" onClick={this.state.search}>
          查询天气
        </button>
      </div>
    )
  }
}
