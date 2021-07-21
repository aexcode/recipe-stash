import { useRef } from 'react'
import { useAuth } from '../contexts'
import { Link } from 'react-router-dom'
import { Layout } from '../components'

export const Register = () => {
  const { register } = useAuth()
  const emailRef = useRef()
  const passwordRef = useRef()

  const handleSubmit = (e) => {
    e.preventDefault()
    register(emailRef.current.value, passwordRef.current.value)
  }

  return (
    <Layout>
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <input
          type='email'
          ref={emailRef}
          placeholder='Email Address'
          aria-label='Email address'
        />

        <input
          type='password'
          ref={passwordRef}
          placeholder='Password'
          aria-label='Password'
        />

        <input type='submit' value='Create Account' />
      </form>

      <aside>
        Have an account? <Link to='/sign-in'>Sign in</Link>
      </aside>
    </Layout>
  )
}
