import { StylePropType, Units } from '@/store/formConfReducer'

/**
 * 样式处理相关工具
 */

export function getStyleByProp(prop: StylePropType) {
  const { number, unit } = prop
  return unit === Units.auto ? 'auto' : `${number}${unit}`
}
