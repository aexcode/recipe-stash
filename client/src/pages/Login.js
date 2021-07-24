import { useRef } from 'react'
import { useAuth } from '../contexts'
import { Link } from 'react-router-dom'

import Layout from '../layout/Layout'
import { Heading } from '../components'

export const Login = () => {
  const { login } = useAuth()
  const emailRef = useRef()
  const passwordRef = useRef()

  const handleSubmit = (e) => {
    e.preventDefault()
    login(emailRef.current.value, passwordRef.current.value)
  }

  return (
    <Layout>
      <Heading size={2}>Login</Heading>
      <form onSubmit={handleSubmit}>
        <input
          type='email'
          ref={emailRef}
          placeholder='Email Address'
          aria-label='Email Address'
        />

        <input
          type='password'
          ref={passwordRef}
          placeholder='Password'
          aria-label='Password'
        />

        <input type='submit' value='Sign In' />
      </form>
      <aside>
        <Link to='/sign-up'>Create an Account</Link>
      </aside>
    </Layout>
  )
}
