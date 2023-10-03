import styled from 'styled-components'

export const friendItemStyled = styled.li`
  display: flex;
  align-items: center;
  width: 100%;
  min-width: 300px;
  position: relative;

  img:nth-child(1) {
    width: 40px;
    height: 40px;
    border-radius: 100%;
    margin-right: 20px;
  }
  h3 {
    color: var(--text-color);
    font-size: 15px;
    font-weight: 600;
  }
  h4 {
    color: var(--grey-color);
    font-size: 12px;
    font-weight: 600;
  }
  button {
    font-size: 12px;
    font-weight: 500;
    color: white;
    width: 67px;
    height: 28px;
    justify-content: center;
    align-items: center;
    border-radius: 8px;
    background-color: var(--red-color);
    border: none;
    box-shadow: 0px 4px 21px -4px #00000033;
    transition: all 0.3s;
    position: absolute;
    right: 0;
  }

  button:hover {
    transition: all 0.3s;
    background-color: var(--red-color-hover);
  }
  div {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }

  @media (min-width: 750px) {
    img:nth-child(1) {
      width: 56px;
      height: 56px;
    }

    h3 {
      font-size: 20px;
    }
    h4 {
      font-size: 15px;
    }

    button {
      width: 80px;
      height: 35px;
    }
  }
`
