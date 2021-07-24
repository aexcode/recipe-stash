import Navbar from './Navbar'
import Main from './Main'
export default function Layout({ children }) {
  return (
    <div className='container'>
      <div className='row'>
        <Navbar />
      </div>
      <div className='row mt-5'>
        <Main children={children} />
      </div>
    </div>
  )
}
