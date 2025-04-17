interface TextAreaProps {
  placeholder: string
  showCount: boolean
}
export type TextAreaPropsType = Partial<TextAreaProps>
export const textAreaDefaultProps: TextAreaPropsType = {
  placeholder: '请输入文本',
  showCount: false,
}
