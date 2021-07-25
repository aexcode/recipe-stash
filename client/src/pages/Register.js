import { useAuth } from '../contexts'
import { Link } from 'react-router-dom'

import Layout from '../layout/Layout'
import { AuthForm, Heading } from '../components'

export const Register = ({ onSubmit }) => {
  const { register } = useAuth()

  return (
    <Layout>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-sm-2 col-md-3 col-lg-4'></div>
          <div className='col-sm-8 col-md-6 col-lg-4'>
            <Heading size={2}>Create an Account</Heading>
            <AuthForm onSubmit={register} submitText='Create Account' />
            <aside>
              <span className='small'>
                Have an account? <Link to='/sign-in'>Sign in</Link>
              </span>
            </aside>
          </div>
          <div className='col-sm-2 col-md-3 col-lg-4'></div>
        </div>
      </div>
    </Layout>
  )
}
