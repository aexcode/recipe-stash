import { useAuth } from '../contexts'
import { Link } from 'react-router-dom'

import Layout from '../layout/Layout'
import { Heading, AuthForm } from '../components'

export const Login = () => {
  const { login } = useAuth()

  return (
    <Layout>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-sm-2 col-md-3 col-lg-4'></div>
          <div className='col col-sm-6 col-lg-4'>
            <Heading size={2}>Sign In</Heading>

            <AuthForm onSubmit={login} submitText='Sign In' />
            <aside>
              <span className='small'>
                Need an account? <Link to='/sign-up'>Sign up</Link>
              </span>
            </aside>
          </div>
          <div className='col-sm-2 col-md-3 col-lg-4'></div>
        </div>
      </div>
    </Layout>
  )
}
