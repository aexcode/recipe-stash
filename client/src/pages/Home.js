import { Link } from 'react-router-dom'

import Layout from '../layout/Layout'
import image from '../assets/undraw_Notes_re_pxhw.svg'

export const Home = () => {
  return (
    <Layout>
      <div className='container-fluid'>
        <div className='d-flex flex-column'>
          <div className='row flex-md-row-reverse '>
            {/* image */}
            <div className='col-md-6'>
              <img src={image} alt='' className='img-fluid' />
            </div>

            {/* info */}
            <div className='col-md-6'>
              <div className='row mt-4'>
                <h1 className='display-3 text-center text-md-start mb-3'>
                  Recipe Stash
                </h1>
                <p className='lead'>
                  Quick save recipes from around the web, for easy access when
                  it's time to cook.
                </p>

                <div class='btn-group-vertical mt-1'>
                  <Link to='/sign-up' class='btn btn-primary btn-lg'>
                    Get Started
                  </Link>
                  <Link
                    to='/sign-in'
                    class='btn btn-outline-primary btn-lg mt-3'>
                    Sign In
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className='container-fluid'>
        <div className='row'>
          <div className='col-md-6'>
            <img src={image} alt='' className='img-fluid' />
          </div>
          <div className='col-md-6'>
            <h1 className='display-3 text-center'>Recipe Stash</h1>
            <p className='lead'>
              Quick save recipes from around the web, for easy access when it's
              time to cook.
            </p>
          </div>
        </div>

        <div className='row'>
          <div class='btn-group-vertical'>
            <Link to='/sign-up' class='btn btn-primary btn-lg'>
              Get Started
            </Link>
            <Link to='/sign-in' class='btn btn-outline-primary btn-lg'>
              Sign In
            </Link>
          </div>
        </div>
      </div> */}
    </Layout>
  )
}
