/**
 * @description: 类型相关工具方法
 */

/**
 * 用于根据枚举值获取对应的键
 * @param enumObj 枚举对象
 * @param value 值
 * @returns
 */
export function getKeyByValueInEnum<T extends Record<string, string | number>>(
  enumObj: T,
  value: string | number
): keyof T {
  for (const key in enumObj) {
    if (enumObj[key] === value) {
      return key as keyof T
    }
  }
  throw new Error(`未在枚举中找到值为 ${value} 的键`)
}

/**
 * 定义一个通用映射类型，用于根据键类型获取对应的值类型
 */
export type ValueTypeForKey<T, K extends keyof T> = T[K]

/**
 * 实现深度只读类型
 */
export type DeepReadonly<T> = {
  readonly [P in keyof T]: T[P] extends Record<string, unknown> | Array<unknown>
    ? DeepReadonly<T[P]>
    : T[P]
}
