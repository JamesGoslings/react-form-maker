import React, { FC } from 'react'
import { Form, Input, Radio, Switch } from 'antd'
import { setFormConf, FormConfStateType } from '@/store/formConfReducer'
import { ValueTypeForKey } from '@/utils'
import { StylePropType } from '@/components/common/UnitStyleSelect'
import { useDispatch } from 'react-redux'
import { useGetFormConf } from '@/hooks'
import UnitStyleSelect from '@/components/common/UnitStyleSelect'

const FormConfig: FC = function () {
  const dispatch = useDispatch()

  let {
    name,
    labelAlign,
    size,
    labelSuffix,
    labelWidth,
    itemMaginBottom,
    hideRequiredSymbol,
    showSubmitBtn,
    showResetBtn,
  } = useGetFormConf()

  const labelPositionOptions = [
    {
      label: '左对齐',
      value: 'left',
    },
    {
      label: '右对齐',
      value: 'right',
    },
    {
      label: '顶部',
      value: 'top',
    },
  ]
  const sizeOptions = [
    {
      label: '小',
      value: 'small',
    },
    {
      label: '默认',
      value: 'middle',
    },
    {
      label: '大',
      value: 'large',
    },
  ]

  function handleChangeProp<K extends keyof FormConfStateType>(
    key: K,
    value: ValueTypeForKey<FormConfStateType, K>
  ) {
    dispatch(setFormConf({ key, value }))
  }
  function handleChangeWidth(prop: StylePropType) {
    dispatch(setFormConf({ key: 'labelWidth', value: prop }))
  }

  function handleChangeMarginBottom(prop: StylePropType) {
    dispatch(setFormConf({ key: 'itemMaginBottom', value: prop }))
  }

  return (
    <Form colon={false} layout="vertical" size="small">
      <Form.Item label="表单名称">
        <Input
          placeholder="请输入表单名称"
          value={name}
          onChange={e => {
            handleChangeProp('name', e.target.value)
          }}
        />
      </Form.Item>
      <Form.Item label="标签的位置">
        <Radio.Group
          options={labelPositionOptions}
          value={labelAlign}
          onChange={e => {
            handleChangeProp('labelAlign', e.target.value)
          }}
        />
      </Form.Item>
      <Form.Item label="表单的尺寸">
        <Radio.Group
          options={sizeOptions}
          value={size}
          onChange={e => {
            handleChangeProp('size', e.target.value)
          }}
        />
      </Form.Item>
      <Form.Item label="标签的后缀">
        <Input
          placeholder="请输入标签的后缀"
          defaultValue={labelSuffix}
          onChange={e => {
            handleChangeProp('labelSuffix', e.target.value)
          }}
        />
      </Form.Item>
      <Form.Item label="标签的宽度">
        <UnitStyleSelect
          onChange={handleChangeWidth}
          onReset={handleChangeWidth}
          prop={labelWidth}
        />
      </Form.Item>
      <Form.Item label="表单项的下边距">
        <UnitStyleSelect
          onChange={handleChangeMarginBottom}
          onReset={handleChangeMarginBottom}
          prop={itemMaginBottom}
        />
      </Form.Item>
      <Form.Item label="是否隐藏必选字段前的点标记">
        <Switch
          value={hideRequiredSymbol}
          onChange={val => {
            handleChangeProp('hideRequiredSymbol', val)
          }}
        />
      </Form.Item>
      <Form.Item label="是否显示提交按钮">
        <Switch
          value={showSubmitBtn}
          onChange={val => {
            handleChangeProp('showSubmitBtn', val)
          }}
        />
      </Form.Item>
      <Form.Item label="是否显示重置按钮">
        <Switch
          value={showResetBtn}
          onChange={val => {
            handleChangeProp('showResetBtn', val)
          }}
        />
      </Form.Item>
    </Form>
  )
}

export default FormConfig
