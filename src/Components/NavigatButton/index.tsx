import * as S from './style'
interface NavigateButtonProps {
  text: string
  children: React.ReactNode
}
export function NavigateButton({ text, children }: NavigateButtonProps) {
  return (
    <S.navigateButton>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      {children} {text}
    </S.navigateButton>
  )
}
