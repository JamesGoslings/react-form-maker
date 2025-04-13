import React, { FC } from 'react'
import { Form } from 'antd'
import { useGetFormConf } from '@/hooks'
import styles from './FormWithConf.module.scss'

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
      className={styles['form-container']}
    >
      {normalizedChildren}
    </Form>
  )
}

export default FormWithConf
