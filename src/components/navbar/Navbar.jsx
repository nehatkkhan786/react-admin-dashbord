import './navbar.scss'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import Face5RoundedIcon from '@mui/icons-material/Face5Rounded';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import DarkModeRoundedIcon from '@mui/icons-material/DarkModeRounded';

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='navbar-wrapper'>
          <div className='navbar-search'>
              <input type='text' placeholder='Search' />
              <SearchOutlinedIcon/>
          </div>

          <div className='navbar-icons'>
              <div className='navbar-icon'><Face5RoundedIcon/></div>
              <div className='navbar-icon'><LogoutRoundedIcon/></div>
              <div className='navbar-icon'><DarkModeRoundedIcon/></div>
          </div>
      </div>
    </div>
  )
}

export default Navbar