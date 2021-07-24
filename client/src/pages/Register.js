import { useAuth } from '../contexts'
import { Link } from 'react-router-dom'

import Layout from '../layout/Layout'
import { AuthForm, Heading } from '../components'

export const Register = ({ onSubmit }) => {
  const { register } = useAuth()

  return (
    <Layout>
      <Heading size={2}>Create an Account</Heading>
      <AuthForm onSubmit={register} submitText='Create Account' />

      <aside>
        Have an account? <Link to='/sign-in'>Sign in</Link>
      </aside>
    </Layout>
  )
}
