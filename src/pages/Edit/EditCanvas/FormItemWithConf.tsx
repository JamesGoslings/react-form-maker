import React, { FC } from 'react'
import { BasicConfType } from '../ComponentConfig'
import { ComponentType } from '@/components/innerComponents'
import { Form, Popover } from 'antd'
import { useGetFormConf, useGetDefaultLabelByType } from '@/hooks'
import { getStyleByProp } from '@/utils'

type PropsType = {
  children: React.ReactNode[] | React.ReactNode
  basicProps?: BasicConfType
  type: ComponentType
}

const FormItemWithConf: FC<PropsType> = ({ children, basicProps, type }: PropsType) => {
  const normalizedChildren = React.Children.toArray(children)
  const { labelWidth, labelSuffix, itemMaginBottom, hideRequiredSymbol } = useGetFormConf()

  // 拿组件title作为默认标签值
  const defaultLabel = useGetDefaultLabelByType(type)
  const {
    label = defaultLabel,
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
