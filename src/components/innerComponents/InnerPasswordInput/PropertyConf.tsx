import React, { FC } from 'react'
import { PasswordInputPropsType, passwordInputDefaultProps } from './type'
import { useHandleChangeComponentProp } from '@/hooks'
import { Form, Input, Switch } from 'antd'

const InnerPasswordInputPropertyConf: FC<PasswordInputPropsType> = (
  props: PasswordInputPropsType
) => {
  const handleChangeProp = useHandleChangeComponentProp<PasswordInputPropsType>()
  const { placeholder, showCount } = { ...passwordInputDefaultProps, ...props }
  return (
    <Form colon={false} layout="vertical" size="small">
      <Form.Item label="占位提示语">
        <Input
          defaultValue={placeholder}
          placeholder="请输入占位提示语"
          onChange={e => handleChangeProp('placeholder', e.target.value)}
        />
      </Form.Item>
      <Form.Item label="是否显示字数">
        <Switch
          defaultChecked={showCount}
          onChange={checked => handleChangeProp('showCount', checked)}
        />
      </Form.Item>
    </Form>
  )
}

export default InnerPasswordInputPropertyConf
