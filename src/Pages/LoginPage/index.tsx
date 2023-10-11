import * as S from './style'
import { useState } from 'react'
import { HeaderLogo } from '../../Components/HeaderLogo'
import { FcGoogle } from 'react-icons/fc'
import { BsApple } from 'react-icons/bs'
import { Loading } from '../../Components/Loading'
import { LoginUser } from '../../services/UserAndPost.service'

import { useLocation, useNavigate } from 'react-router-dom'
import { useAuthContext } from '../../Contexts/AuthContext'

export function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { setAuthToken } = useAuthContext()
  const navigate = useNavigate()
  const location = useLocation()
  const { from } = location.state || { from: { pathname: '/' } }

  const handleLoginButton = async (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault()
    try {
      await LoginUser({ email, password }).then((token: string | null) => {
        if (token) {
          setAuthToken(token)
          navigate(from)
        }
      })
    } catch (err) {
      loginDataIncorrect()
    }
  }
  const loginDataIncorrect = () => {
    document.getElementById('userOrPasswordIncorrect')?.classList.add('active')
  }

  return (
    <S.boxLoginPageStyled>
      <S.loginPage>
        <HeaderLogo />

        <S.formStyled action="">
          <h1>Faça seu login</h1>
          <S.labelAndInputStyled htmlFor="">
            E-mail{' '}
            <input
              type="email"
              placeholder="Digite seu E-mail"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </S.labelAndInputStyled>
          <div>
            <S.labelAndInputStyled htmlFor="">
              Senha{' '}
              <input
                type="password"
                placeholder="Digite sua senha"
                value={password}
                onChange={e => setPassword(e.target.value)}
              />
            </S.labelAndInputStyled>
            <S.rememberAndForgotPassword>
              <label htmlFor="">
                <input type="checkbox" name="" id="" /> Lembrar senha
              </label>
              <a href="">Esqueci minha senha</a>
              <h5 id="userOrPasswordIncorrect">
                <p className="ball" /> Email ou senha incorreto
              </h5>
            </S.rememberAndForgotPassword>
          </div>

          <button className="submit" type="submit" onClick={handleLoginButton}>
            Entrar
          </button>
        </S.formStyled>
        <h4>
          Não possui uma conta? <a href="/register">Cadastre-se</a>
        </h4>

        <S.enterWithStyled>
          <p> Entrar com </p>

          <button>
            {' '}
            <FcGoogle size={18} /> Entrar com Google
          </button>
          <button>
            {' '}
            <BsApple size={18} color="black" /> Entrar com Apple
          </button>
        </S.enterWithStyled>
      </S.loginPage>
      <img
        className="loginAndRegisterImage"
        src="/loginAndRegisterImage.svg"
        alt=""
      />
      <Loading />
    </S.boxLoginPageStyled>
  )
}
