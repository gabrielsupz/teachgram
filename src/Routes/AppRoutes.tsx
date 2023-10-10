import {
  Route,
  BrowserRouter,
  Routes,
  useLocation,
  Outlet
} from 'react-router-dom'

import { FeedPage } from '../Pages/FeedPage'
import { LoginPage } from '../Pages/LoginPage'
import { ProfilePage } from '../Pages/ProfilePage'
import { RegisterPage } from '../Pages/RegisterPage'
import { useAuthContext } from '../Contexts/AuthContext'
import { Navigate } from 'react-router-dom'
import { FriendsListProvider } from '../Contexts/FriendsListContext'
import { CreatePostModalProvider } from '../Contexts/CreatePostContext'
import { ConfigSectionProvider } from '../Contexts/ConfigSectionContext'

function PrivateRoutes() {
  const { authToken } = useAuthContext()
  const isAuthenticated = !!authToken

  let location = useLocation()

  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} replace />
  }
  return (
    <FriendsListProvider>
      <CreatePostModalProvider>
        <ConfigSectionProvider>
          <Outlet />
        </ConfigSectionProvider>
      </CreatePostModalProvider>
    </FriendsListProvider>
  )
}

export function AppRoutes() {
  const { authToken } = useAuthContext()
  const isAuthenticated = !!authToken

  return (
    <BrowserRouter>
      <Routes>
        {!isAuthenticated ? (
          <>
            <Route index path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="*" element={<Navigate to="/login" />}></Route>
          </>
        ) : (
          <>
            <Route element={<PrivateRoutes />}>
              <Route path="/profile" element={<ProfilePage />} />
              <Route path="/profile/:urlid" element={<ProfilePage />} />
              <Route path="/feed" element={<FeedPage />} />
              <Route path="/" element={<FeedPage />} />
            </Route>
          </>
        )}
      </Routes>
    </BrowserRouter>
  )
}
