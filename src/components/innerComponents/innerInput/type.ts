interface InputProps {
  placeholder: string
  label: string
}
export type InputPropsType = Partial<InputProps>
export const inputDefaultProps: InputPropsType = {
  placeholder: '请输入',
  label: '输入框',
}
