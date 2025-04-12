import React, { FC } from 'react'
import { Form } from 'antd'

type PropsType = {
  children: React.ReactNode[] | React.ReactNode
  label: string
}

const FormItem: FC<PropsType> = ({ children, label }: PropsType) => {
  const normalizedChildren = React.Children.toArray(children)
  return (
    <Form.Item label={label} colon={false}>
      {normalizedChildren}
    </Form.Item>
  )
}

export default FormItem
