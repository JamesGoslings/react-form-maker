interface InputProps {
  title: string;
  placeholder: string;
}
export type InputPropsType = Partial<InputProps>;
export const inputDefaultProps: InputPropsType = {
  title: "输入框标题",
  placeholder: "请输入",
};
