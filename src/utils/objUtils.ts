/**
 * 对象相关工具方法
 */

export function shallowCopy(value: any) {
  if (value === null || typeof value !== 'object') {
    return value
  }
  if (Array.isArray(value)) {
    return [...value]
  }
  return { ...value }
}
