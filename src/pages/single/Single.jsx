import './single.scss'
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'

const Single = () => {
  return (
    <div className='single-page'>
        <Sidebar/>
        <div className='single-page-container'>
              <Navbar/>
        </div>
    </div>
  )
}

export default Single