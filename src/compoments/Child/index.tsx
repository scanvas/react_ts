import React from 'react'

interface IProps {
  name: string
  age: number
  addAge: () => void
}

export default function Child(props: IProps) {
  return (
    <div>
      <div>name:{props.name}</div>
      <div>age: {props.age}</div>
      <button type="button" onClick={props.addAge}>
        调用父组件方法
      </button>
    </div>
  )
}
