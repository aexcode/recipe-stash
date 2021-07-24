import { Link } from 'react-router-dom'
import { useAuth } from '../contexts'

export default function Navbar() {
  const { currentUser, logout } = useAuth()
  const isLoginPage = window.location.pathname === '/sign-in'

  return (
    <>
      <nav className='navbar navbar-light bg-light'>
        <div className='container-fluid'>
          <Link className='navbar-brand' to='/'>
            Recipe Stash
          </Link>
          <div className='d-flex'>
            <ul className='navbar-nav'>
              {/* if the user is logged in, display logout button */}
              {currentUser.isAuth && (
                <li className='nav-item'>
                  <button
                    type='button'
                    className='btn btn-link nav-link'
                    onClick={logout}>
                    LOGOUT
                  </button>
                </li>
              )}

              {/* if user is not logged in and it's not the login page, display login link */}
              {!currentUser.isAuth && !isLoginPage && (
                <li className='nav-item'>
                  <Link className='nav-link' to='sign-in'>
                    SIGN IN
                  </Link>
                </li>
              )}

              {/* if user is not logged in and it is the login page, display register link */}
              {!currentUser.isAuth && isLoginPage && (
                <li className='nav-item'>
                  <Link className='nav-link' to='sign-up'>
                    SIGN UP
                  </Link>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}
