interface InputProps {
  placeholder: string
}
export type InputPropsType = Partial<InputProps>
export const inputDefaultProps: InputPropsType = {
  placeholder: '请输入',
}
