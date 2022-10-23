import './list.scss'
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
import DataTables from '../../components/data-tables/DataTables'


const List = () => {
  return (
    <div className='user-list'>
     <Sidebar/>
      <div className='listcontainer'>
      <Navbar/>
        <h3 className='user-title'>Manage Users</h3>
      <DataTables/>
      </div>
    </div>
  )
}

export default List