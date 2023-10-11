import React, { ChangeEvent } from 'react'
import * as S from './style'

interface ConfigInputProps {
  id: string
  name: string
  placeholder: string
  type?: string
  value: string
  onChange: (value: string) => void
}

export function ConfigInput({
  id,
  name,
  placeholder,
  type = 'text',
  value,
  onChange
}: ConfigInputProps) {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value)
  }

  return (
    <S.labelStyled htmlFor={id}>
      {name}
      <input
        id={id}
        name={name}
        value={value}
        onChange={handleChange}
        type={type}
        placeholder={placeholder}
      />
    </S.labelStyled>
  )
}
