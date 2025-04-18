import React, { FC } from 'react'
import { Form, Input, Radio, Collapse, Select } from 'antd'
import { ValueTypeForKey } from '@/utils'
import { setSelectedComponentBasicConf } from '@/store/componentsReducer'
import UnitStyleSelect from '@/components/common/UnitStyleSelect'
import { StylePropType, Units } from '@/components/common/UnitStyleSelect'
import { useDispatch } from 'react-redux'
import { defaultBasicConf, BasicConfType, BasicConfPropsType } from './type'
import HideAndShowSwitch from '@/components/common/HideAndShowSwitch'
import styles from './BasicConfig.module.scss'

const BasicConfig: FC<BasicConfPropsType> = function (props: BasicConfPropsType) {
  const {
    label,
    helpText,
    componentWidth,
    labelAlign,
    hiddenLabel = false,
    labelWidth,
  } = {
    ...defaultBasicConf,
    ...props,
  }

  const dispatch = useDispatch()

  /**
   * 配置项值的统一change回调
   * @param key 字段
   * @param value 新值
   */
  function handleChangeProp<K extends keyof BasicConfType>(
    key: K,
    value: ValueTypeForKey<BasicConfType, K>
  ) {
    dispatch(setSelectedComponentBasicConf({ key, value }))
  }

  function handleChangeLabelWidth(prop: StylePropType) {
    dispatch(setSelectedComponentBasicConf({ key: 'labelWidth', value: prop }))
  }

  return (
    <Form colon={false} layout="vertical" size="small">
      <Form.Item label="字段名称">
        <Input
          placeholder="请输入字段名称"
          value={label}
          onChange={e => {
            handleChangeProp('label', e.target.value)
          }}
        />
      </Form.Item>
      <Form.Item label="提示信息">
        <Input
          placeholder="请输入提示信息"
          value={helpText}
          onChange={e => {
            handleChangeProp('helpText', e.target.value)
          }}
        />
      </Form.Item>
      <Form.Item label="组件宽度">
        <Radio.Group
          value={componentWidth}
          onChange={e => {
            handleChangeProp('componentWidth', e.target.value)
          }}
        >
          <Radio.Button value="25%">1/4</Radio.Button>
          <Radio.Button value="33.3%">1/3</Radio.Button>
          <Radio.Button value="50%">1/2</Radio.Button>
          <Radio.Button value="66.7%">2/3</Radio.Button>
          <Radio.Button value="75%">3/4</Radio.Button>
          <Radio.Button value="100%">整行</Radio.Button>
        </Radio.Group>
      </Form.Item>

      <Form.Item noStyle>
        <Collapse
          items={[
            {
              label: (
                <div className={styles['form-label-conf-wrapper']}>
                  <span>配置表单项</span>
                  <HideAndShowSwitch
                    hidden={hiddenLabel}
                    className={hiddenLabel ? '' : styles['show-eye']}
                    onChange={val => {
                      handleChangeProp('hiddenLabel', val)
                    }}
                  />
                </div>
              ),
              children: (
                <>
                  <Form.Item label="标签的位置">
                    <Select
                      defaultValue="left"
                      options={[
                        { value: 'left', label: '左对齐' },
                        { value: 'right', label: '右对齐' },
                      ]}
                      value={labelAlign}
                      onChange={val => handleChangeProp('labelAlign', val as 'left' | 'right')}
                    />
                  </Form.Item>
                  <Form.Item label="标签的宽度">
                    <UnitStyleSelect
                      onChange={handleChangeLabelWidth}
                      onReset={handleChangeLabelWidth}
                      prop={
                        labelWidth ?? {
                          number: 0,
                          unit: Units.px,
                        }
                      }
                    />
                  </Form.Item>
                </>
              ),
            },
          ]}
        />
      </Form.Item>
    </Form>
  )
}

export default BasicConfig
