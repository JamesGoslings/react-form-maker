import React, { FC } from 'react'
import { Form } from 'antd'
import { BasicConfType } from '../ComponentConfig'
import { Popover } from 'antd'
import { useGetFormConf } from '@/hooks'
import { getStyleByProp } from '@/utils'

type PropsType = {
  children: React.ReactNode[] | React.ReactNode
  basicProps?: BasicConfType
}

const FormItemWithConf: FC<PropsType> = ({ children, basicProps }: PropsType) => {
  const normalizedChildren = React.Children.toArray(children)
  const { labelWidth, labelSuffix, itemMaginBottom, hideRequiredSymbol } = useGetFormConf()
  const {
    label = '',
    helpText,
    labelAlign,
    hiddenLabel,
    labelWidth: basicConfLabelWidth,
  } = basicProps ?? {}
  const showLabelWidth = basicConfLabelWidth ?? labelWidth
  return (
    <Form.Item
      labelAlign={labelAlign}
      style={{ marginBottom: getStyleByProp(itemMaginBottom) }}
      label={
        label &&
        !hiddenLabel && (
          <div style={{ width: getStyleByProp(showLabelWidth) }}>
            {helpText && (
              <Popover placement="topRight" title={helpText}>
                <i className="iconfont icon-help"></i>
              </Popover>
            )}
            <span>{`${label}${labelSuffix}`}</span>
          </div>
        )
      }
      required={hideRequiredSymbol ? false : undefined}
      colon={false}
    >
      {normalizedChildren}
    </Form.Item>
  )
}

export default FormItemWithConf
