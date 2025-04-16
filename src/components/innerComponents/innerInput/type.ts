interface InputProps {
  placeholder: string
  showCount: boolean
}
export type InputPropsType = Partial<InputProps>
export const inputDefaultProps: InputPropsType = {
  placeholder: '请输入',
  showCount: false,
}
