import { useLoading } from '../../Contexts/LoadingContext'
import * as S from './style'

export function Loading() {
  const { loading, authLoading } = useLoading()
  if (authLoading) {
    return (
      <S.loadingBoxStyled>
        <img src="/logoIcon.svg" alt="Logo teachgram" />
        <h3>Carregando...</h3>
      </S.loadingBoxStyled>
    )
  }
  if (loading) {
    return (
      <S.loadingBoxStyled>
        <img src="/logoIcon.svg" alt="Logo teachgram" />
        <h3>Carregando...</h3>
      </S.loadingBoxStyled>
    )
  }
}
