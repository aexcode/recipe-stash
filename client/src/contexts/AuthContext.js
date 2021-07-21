// Dependencies
import { createContext, useContext, useState, useEffect } from 'react'
import Axios from 'axios'

// Create auth context
const AuthContext = createContext()

// Custom hook to use auth context
export const useAuth = () => useContext(AuthContext)

// Auth provider
export const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true)
  const [currentUser, setCurrentUser] = useState({
    token: undefined,
    isAuth: false,
  })

  // Check for logged in user
  useEffect(() => {
    setLoading(true)

    const checkLoggedIn = async () => {
      let token = localStorage.getItem('auth-token')
      // If there's no auth-token present, set auth-token header to ''
      if (!token) {
        localStorage.setItem('auth-token', '')
        token = ''
      } else {
        // If auth-token is present, validate token
        const tokenRes = await Axios.post('/api/users/isTokenValid', null, {
          headers: { 'auth-token': token },
        })

        // If the token is valid, get the logged in user
        if (tokenRes) {
          const userRes = await Axios.get('/api/users/', {
            headers: { 'auth-token': token },
          })

          // set the current user
          if (userRes) {
            setCurrentUser({
              token,
              isAuth: true,
              ...userRes.data,
            })
          }
        }
      }
      setLoading(false)
    }

    checkLoggedIn()
  }, [currentUser.isAuth])

  const logout = () => {
    setCurrentUser({
      token: undefined,
      isAuth: false,
    })

    localStorage.setItem('auth-token', '')
  }

  // Provider value
  const value = { currentUser, logout }

  if (loading) return <h1>Loading...</h1>
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
