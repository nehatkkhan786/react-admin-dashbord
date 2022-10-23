import './featured.scss'
import MoreVertRoundedIcon from '@mui/icons-material/MoreVertRounded';
import {CircularProgressbar} from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css';



const Featured = () => {
  return (
    <div className='featured'>
        <div className='top'>
            <h4 className='featured-title'>Total Revenue</h4> 
            <MoreVertRoundedIcon fontSize='small'/>           
        </div>
        <div className='featured-bottom'>
            <div className='featured-chart'>
            <CircularProgressbar
                value={70}
                text={'70%'}
                strokeWidth={5}
                />

            </div>
            <p className='title'>Total Sales Made Today</p>
            <p className='amount'><span>&#8377;</span>. 80000</p>
            <p className='description'>Previous Transaction Processing.Last payment may not be included.</p>
        </div>
    </div>
  )
}

export default Featured