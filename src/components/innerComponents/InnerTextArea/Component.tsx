import React, { FC } from 'react'
import { TextAreaPropsType, textAreaDefaultProps } from './type'
import { Input } from 'antd'

const InnerTextArea: FC<TextAreaPropsType> = function (props: TextAreaPropsType) {
  const { placeholder, showCount } = { ...textAreaDefaultProps, ...props }
  return (
    <div>
      <Input.TextArea placeholder={placeholder} showCount={showCount} />
    </div>
  )
}

export default InnerTextArea
