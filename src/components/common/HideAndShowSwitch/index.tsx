import React, { FC, MouseEvent } from 'react'
import { HideAndShowSwitchPropType } from './type'

const HideAndShowSwitch: FC<HideAndShowSwitchPropType> = function ({
  hidden,
  onChange: handleChange,
  className,
  style,
}: HideAndShowSwitchPropType) {
  function handleClick(e: MouseEvent) {
    e.stopPropagation()
    handleChange(!hidden)
  }
  return (
    <i
      className={`iconfont ${hidden ? 'icon-hide' : 'icon-show'} ${className}`}
      style={style}
      onClick={e => handleClick(e)}
    />
  )
}

export default HideAndShowSwitch
