interface TitleProps {
  text: string
  level: 1 | 2 | 3 | 4 | 5
  titleAlign: 'left' | 'center' | 'right'
}
export type TitlePropsType = Partial<TitleProps>

export const titleDefaultProps: TitlePropsType = {
  text: '标题',
  level: 1,
  titleAlign: 'left',
}

export const levelSizeMap: Readonly<Record<number, string>> = {
  1: '24px',
  2: '20px',
  3: '16px',
}
