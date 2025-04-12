import React, { FC } from 'react'
import { Form } from 'antd'
import { useGetFormConf } from '@/hooks'

type PropsType = {
  children: React.ReactNode[] | React.ReactNode
}

const FormWithConf: FC<PropsType> = ({ children }: PropsType) => {
  const normalizedChildren = React.Children.toArray(children)
  const { labelAlign, name, size } = useGetFormConf()
  return (
    <Form
      colon={false}
      name={name}
      labelAlign={labelAlign === 'top' ? 'right' : labelAlign}
      layout={labelAlign === 'top' ? 'vertical' : 'horizontal'}
      size={size}
    >
      {normalizedChildren}
    </Form>
  )
}

export default FormWithConf
