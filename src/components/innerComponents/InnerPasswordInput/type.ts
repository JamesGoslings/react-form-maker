interface PasswordInputProps {
  placeholder: string
  showCount: boolean
  allowClear: boolean
}
export type PasswordInputPropsType = Partial<PasswordInputProps>
export const passwordInputDefaultProps: PasswordInputPropsType = {
  placeholder: '请输入密码',
  showCount: false,
  allowClear: true,
}
