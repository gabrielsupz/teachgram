import * as S from './style'

interface ConfigInput {
  name: string
  placeholder: string
  type?: React.InputHTMLAttributes<HTMLInputElement>['type']
}

export function ConfigInput({ name, placeholder, type = 'text' }: ConfigInput) {
  return (
    <S.labelStyled
      htmlFor="
  "
    >
      {name}
      <input type={type} placeholder={placeholder} />
    </S.labelStyled>
  )
}
