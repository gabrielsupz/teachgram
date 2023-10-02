import { ConfigSectionProvider } from './Contexts/ConfigSectionContext'
import { FriendsListProvider } from './Contexts/FriendsListContext'
import { FeedPage } from './Pages/FeedPage'
import { LoginPage } from './Pages/LoginPage'
import { ProfilePage } from './Pages/ProfilePage'
import { RegisterPage } from './Pages/RegisterPage'
import { GlobalStyleAndReset } from './styles/globalStyles'
import { Route, BrowserRouter, Routes } from 'react-router-dom'
function App() {
  return (
    <>
      <GlobalStyleAndReset />
      <FriendsListProvider>
        <ConfigSectionProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />
              <Route path="/profile" element={<ProfilePage />} />
              <Route path="/feed" element={<FeedPage />} />
            </Routes>
          </BrowserRouter>
        </ConfigSectionProvider>
      </FriendsListProvider>
    </>
  )
}

export default App
