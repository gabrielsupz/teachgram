import * as S from './style'

interface NavigateButtonProps {
  text: string
  children: React.ReactNode
  onClickFunction?: () => void
}
export function NavigateButton({
  text,
  children,
  onClickFunction
}: NavigateButtonProps) {
  return (
    <S.navigateButton onClick={onClickFunction}>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      {children} {text}
    </S.navigateButton>
  )
}
