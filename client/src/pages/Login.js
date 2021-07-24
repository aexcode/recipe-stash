import { useAuth } from '../contexts'
import { Link } from 'react-router-dom'

import Layout from '../layout/Layout'
import { Heading, AuthForm } from '../components'

export const Login = () => {
  const { login } = useAuth()

  return (
    <Layout>
      <Heading size={2}>Sign In</Heading>
      <AuthForm onSubmit={login} submitText='Sign In' />
      <aside>
        <Link to='/sign-up'>Create an Account</Link>
      </aside>
    </Layout>
  )
}
