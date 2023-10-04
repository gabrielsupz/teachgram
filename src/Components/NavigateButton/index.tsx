import * as S from './style'

interface NavigateButtonProps {
  text: string
  children: React.ReactNode
  onClickFunction?: () => void
  link?: string
}
export function NavigateButton({
  text,
  children,
  onClickFunction,
  link
}: NavigateButtonProps) {
  return (
    <S.navigateButton onClick={onClickFunction}>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      {children} <a href={link}>{text}</a>
    </S.navigateButton>
  )
}
