import { styled } from 'styled-components'

export const labelStyled = styled.label`
  font-size: 15px;
  font-weight: 400;
  color: var(--text-color);
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;

  input {
    padding: 0;
    width: 100%;
    color: var(--light-grey-color);
    font-size: 15px;
    border: none;
    border-bottom: 1px solid #e6e6e6;
    padding-bottom: 3px;
  }
`
