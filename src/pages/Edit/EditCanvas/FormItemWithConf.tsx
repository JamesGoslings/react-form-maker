import React, { FC } from 'react'
import { Form } from 'antd'
import { useGetFormConf } from '@/hooks'
import { getStyleByProp } from '@/utils'

type PropsType = {
  children: React.ReactNode[] | React.ReactNode
  label: string
}

const FormItemWithConf: FC<PropsType> = ({ children, label }: PropsType) => {
  const normalizedChildren = React.Children.toArray(children)
  const { labelWidth, labelSuffix, itemMaginBottom, hideRequiredSymbol } = useGetFormConf()
  return (
    <Form.Item
      style={{ marginBottom: getStyleByProp(itemMaginBottom) }}
      label={
        label && <div style={{ width: getStyleByProp(labelWidth) }}>{`${label}${labelSuffix}`}</div>
      }
      required={hideRequiredSymbol ? false : undefined}
      colon={false}
    >
      {normalizedChildren}
    </Form.Item>
  )
}

export default FormItemWithConf
