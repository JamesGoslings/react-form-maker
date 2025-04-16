import React, { FC } from 'react'
import { TitlePropsType, titleDefaultProps } from './type'
import { useHandleChangeComponentProp } from '@/hooks'
import { Form, Input, Select, Radio } from 'antd'

const InnerTitlePropertyConf: FC<TitlePropsType> = function (props: TitlePropsType) {
  const { text, level, titleAlign } = { ...titleDefaultProps, ...props }
  const handleChangeProp = useHandleChangeComponentProp<TitlePropsType>()
  return (
    <Form colon={false} layout="vertical" size="small">
      <Form.Item label="标题内容">
        <Input
          placeholder="请输入标题内容"
          defaultValue={text}
          onChange={e => {
            handleChangeProp('text', e.target.value)
          }}
        />
      </Form.Item>
      <Form.Item label="标题大小">
        <Select
          defaultValue={level}
          options={[
            { value: 1, label: 'H1' },
            { value: 2, label: 'H2' },
            { value: 3, label: 'H3' },
            { value: 4, label: 'H4' },
            { value: 5, label: 'H5' },
          ]}
          onChange={val => {
            handleChangeProp('level', val)
          }}
        />
      </Form.Item>
      <Form.Item label="对齐方式">
        <Radio.Group
          defaultValue={titleAlign}
          options={[
            { value: 'left', label: '靠左' },
            { value: 'center', label: '居中' },
            { value: 'right', label: '靠右' },
          ]}
          onChange={e => {
            handleChangeProp('titleAlign', e.target.value)
          }}
        />
      </Form.Item>
    </Form>
  )
}

export default InnerTitlePropertyConf
