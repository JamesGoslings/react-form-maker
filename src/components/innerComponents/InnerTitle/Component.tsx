import React, { FC } from 'react'
import { titleDefaultProps, TitlePropsType, levelSizeMap } from './type'
import { Typography } from 'antd'

const { Title } = Typography
const InnerTitle: FC<TitlePropsType> = (props: TitlePropsType) => {
  const { text, level, titleAlign } = { ...titleDefaultProps, ...props }

  function getFontSize(level: number | undefined): string {
    return levelSizeMap[level as number] ?? '16px'
  }
  return (
    <Title
      level={level}
      style={{
        textAlign: titleAlign ? titleAlign : 'start',
        fontSize: getFontSize(level),
        marginBottom: '0',
      }}
    >
      {text}
    </Title>
  )
}

export default InnerTitle
