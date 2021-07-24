import { Link } from 'react-router-dom'
import { useAuth } from '../contexts'

export default function Navbar() {
  const { currentUser, logout } = useAuth()
  const isLoginPage = window.location.pathname === '/sign-in'

  return (
    <>
      <nav class='navbar navbar-light bg-light'>
        <div className='container-fluid'>
          <Link class='navbar-brand' to='/'>
            Recipe Stash
          </Link>
          <div className='d-flex'>
            <ul className='navbar-nav'>
              {/* if the user is logged in, display logout button */}
              {currentUser.isAuth && (
                <li className='nav-item'>
                  <button
                    type='button'
                    class='btn btn-link nav-link'
                    onClick={logout}>
                    Logout
                  </button>
                </li>
              )}

              {/* if user is not logged in and it's not the login page, display login link */}
              {!currentUser.isAuth && !isLoginPage && (
                <li className='nav-item'>
                  <Link className='nav-link fs-6' to='sign-in'>
                    Sign In
                  </Link>
                </li>
              )}

              {/* if user is not logged in and it is the login page, display register link */}
              {!currentUser.isAuth && isLoginPage && (
                <li className='nav-item'>
                  <Link className='nav-link fs-6' to='sign-up'>
                    Sign Up
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