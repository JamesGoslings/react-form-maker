import React, { FC } from 'react'
import { PasswordInputPropsType, passwordInputDefaultProps } from './type'
import { Input } from 'antd'

const InnerPasswordInput: FC<PasswordInputPropsType> = function (props: PasswordInputPropsType) {
  const { showCount, placeholder, allowClear } = { ...passwordInputDefaultProps, ...props }
  return (
    <div>
      <Input.Password showCount={showCount} placeholder={placeholder} allowClear={allowClear} />
    </div>
  )
}

export default InnerPasswordInput
