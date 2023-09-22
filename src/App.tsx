import { LoginPage } from './Pages/LoginPage'
import { GlobalStyleAndReset } from './styles/globalStyles'
import { Route, BrowserRouter, Routes } from 'react-router-dom'
function App() {
  return (
    <>
      <GlobalStyleAndReset />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
