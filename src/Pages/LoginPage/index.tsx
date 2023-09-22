import { HeaderLogo } from '../../Components/HeaderLogo'

export function LoginPage() {
  return (
    <main>
      <HeaderLogo />

      <form action="">
        <label htmlFor="">
          Email <input type="text" placeholder="Digite seu E-mail" />
        </label>
        <label htmlFor="">
          Senha <input type="text" placeholder="Digite sua senha" />
        </label>
        <div>
          <label htmlFor="">
            <input type="checkbox" name="" id="" /> Lembrar senha
          </label>
          <a href="">Esqueci minha senha</a>
        </div>

        <button type="submit">Entrar</button>
      </form>
      <h4>
        {' '}
        Não possui uma conta?<a href="">Cadastre-se</a>
      </h4>

      <p>------- Entrar com --------</p>

      <button>Entrar com Google</button>
      <button>Entrar com Apple</button>
    </main>
  )
}
