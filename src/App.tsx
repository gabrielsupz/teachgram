import { Loading } from './Components/Loading'
import { ConfigSectionProvider } from './Contexts/ConfigSectionContext'
import { CreatePostModalProvider } from './Contexts/CreatePostContext'
import { FriendsListProvider } from './Contexts/FriendsListContext'
import { LoadingProvider, useLoading } from './Contexts/LoadingContext'
import { FeedPage } from './Pages/FeedPage'
import { LoginPage } from './Pages/LoginPage'
import { ProfilePage } from './Pages/ProfilePage'
import { RegisterPage } from './Pages/RegisterPage'
import { GlobalStyleAndReset } from './styles/globalStyles'
import { Route, BrowserRouter, Routes } from 'react-router-dom'
function App() {
  const { loading } = useLoading()
  return (
    <>
      <GlobalStyleAndReset />
      <LoadingProvider>
        <FriendsListProvider>
          <CreatePostModalProvider>
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
          </CreatePostModalProvider>
        </FriendsListProvider>
      </LoadingProvider>
    </>
  )
}

export default App
