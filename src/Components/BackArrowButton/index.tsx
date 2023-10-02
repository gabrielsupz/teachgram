import * as S from './style'
interface BackArrowButtonProps {
  backFunction: () => void
}
export function BackArrowButton({ backFunction }: BackArrowButtonProps) {
  return (
    <S.BackArrowButtonStyled
      id="backArrowButton"
      onClick={() => backFunction()}
    >
      <img
        src="/backArrow.svg"
        alt="Botão com iamgem de seta para a esquerda"
      />
    </S.BackArrowButtonStyled>
  )
}
