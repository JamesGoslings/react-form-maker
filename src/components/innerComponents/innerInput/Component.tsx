import React, { FC } from 'react'
import { Input } from 'antd'
import { InputPropsType, inputDefaultProps } from './type'

const InnerInput: FC<InputPropsType> = function (props) {
  const { placeholder } = { ...inputDefaultProps, ...props }
  return (
    <div>
      <div>
        <Input placeholder={placeholder}></Input>
      </div>
    </div>
  )
}

export default InnerInput
