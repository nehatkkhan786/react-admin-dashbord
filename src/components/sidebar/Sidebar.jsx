import './sidebar.scss'
import DashboardIcon from '@mui/icons-material/Dashboard';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import PersonIcon from '@mui/icons-material/Person';
import InventoryIcon from '@mui/icons-material/Inventory';




const Sidebar = () => {
  return (
    <div className='sidebar'>
        <div className='sidebar-top'>
            <span className='logo'>Admin Dashboard</span>
        </div>
        <hr/>
        <div className='sidebar-center'>
            <ul>
               
                <li><DashboardIcon className='icon'/><span>Dashboard</span></li>
                <li><ProductionQuantityLimitsIcon  className='icon'/><span>Products</span></li>
                <li><PersonIcon className='icon' /><span>Users</span></li>
                <li><InventoryIcon className='icon' /><span>Orders</span></li>
            </ul>
        </div>
        <div className='sidebr-bottom'></div>        
    </div>
  )
}

export default Sidebar