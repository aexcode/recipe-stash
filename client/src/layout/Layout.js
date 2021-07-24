import Navbar from './Navbar'
import Main from './Main'
export default function Layout({ children }) {
  return (
    <div className='container-fluid'>
      <div className='row'>
        <Navbar />
      </div>
      <div className='row'>
        <Main children={children} />
      </div>
    </div>
  )
}
