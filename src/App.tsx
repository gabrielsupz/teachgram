import { LoginPage } from './Pages/LoginPage'
import { RegisterPage } from './Pages/RegisterPage'
import { GlobalStyleAndReset } from './styles/globalStyles'
import { Route, BrowserRouter, Routes } from 'react-router-dom'
function App() {
  return (
    <>
      <GlobalStyleAndReset />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
