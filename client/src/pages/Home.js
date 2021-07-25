import { Link } from 'react-router-dom'

import Layout from '../layout/Layout'
import { Heading } from '../components'
import image from '../assets/undraw_Notes_re_pxhw.svg'

export const Home = () => {
  return (
    <Layout>
      <div className='container'>
        <div className='d-flex flex-column'>
          <div className='row align-items-center flex-md-row-reverse '>
            {/* image */}
            <div className='col col-lg-1'></div>
            <div className='col-sm-5 col-lg-5'>
              <img src={image} alt='' className='img-fluid' />
            </div>

            {/* info */}
            <div className='col col-lg-1'></div>
            <div className='col-sm-6 col-lg-4'>
              <div className='row mt-4'>
                <Heading size={1} className='text-md-start'>
                  Recipe Stash
                </Heading>
                <p className='lead'>
                  Quick save recipes from around the web, for easy access when
                  it's time to cook.
                </p>

                <div className='btn-group-vertical mt-1'>
                  <Link to='/sign-up' className='btn btn-primary btn-lg'>
                    Get Started
                  </Link>
                  <Link
                    to='/sign-in'
                    className='btn btn-outline-primary btn-lg mt-3'>
                    Sign In
                  </Link>
                </div>
              </div>
            </div>
            <div className='col col-lg-1'></div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
