import React from 'react'
import { useAuthContext } from '../Contexts/AuthContext'
import { Navigate } from 'react-router-dom'
import { useEffect } from 'react'
interface Props {
  children: React.ReactNode
}

export function PrivateRoutes({ children }: Props) {
  const { authToken } = useAuthContext()
  const isAuthenticated = authToken !== ''

  if (!isAuthenticated) console.log('N deu')

  return isAuthenticated ? (
    <React.Fragment>{children}</React.Fragment>
  ) : (
    <Navigate to="/" />
  )
}