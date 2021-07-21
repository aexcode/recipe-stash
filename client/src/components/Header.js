import { Link } from 'react-router-dom'
import { useAuth } from '../contexts'

export default function Header() {
  const { currentUser, logout } = useAuth()
  const isLoginPage = window.location.pathname === '/sign-in'

  return (
    <header>
      <h1>
        <Link to='/'>Recipe Stash</Link>
      </h1>

      <nav>
        {/* if the user is logged in, display logout button */}
        {currentUser.isAuth && <button onClick={logout}>Logout</button>}

        {/* if user is not logged in and it's not the login page, display login link */}
        {!currentUser.isAuth && !isLoginPage && (
          <Link to='sign-in'>Sign In</Link>
        )}

        {/* if user is not logged in and it is the login page, display register link */}
        {!currentUser.isAuth && isLoginPage && (
          <Link to='sign-up'>Sign Up</Link>
        )}
      </nav>
    </header>
  )
}
