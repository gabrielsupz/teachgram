import { AuthContextProvider } from './Contexts/AuthContext'

import { LoadingProvider } from './Contexts/LoadingContext'

import { AppRoutes } from './Routes/AppRoutes'
import { GlobalStyleAndReset } from './styles/globalStyles'

function App() {
  return (
    <>
      <GlobalStyleAndReset />
      <LoadingProvider>
        <AuthContextProvider>
          <AppRoutes />
        </AuthContextProvider>
      </LoadingProvider>
    </>
  )
}

export default App
