import React, { FC } from 'react'
import { Input } from 'antd'
import { InputPropsType, inputDefaultProps } from './type'

const InnerInput: FC<InputPropsType> = function (props) {
  const { placeholder, showCount } = { ...inputDefaultProps, ...props }
  return (
    <div>
      <div>
        <Input placeholder={placeholder} showCount={showCount}></Input>
      </div>
    </div>
  )
}

export default InnerInput
