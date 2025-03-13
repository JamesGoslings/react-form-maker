interface TitleProps {
  text: string
  level: 1 | 2 | 3 | 4 | 5
  isCenter: boolean
}
export type TitlePropsType = Partial<TitleProps>

export const titleDefaultProps: TitlePropsType = {
  text: '标题',
  level: 1,
  isCenter: false,
}
