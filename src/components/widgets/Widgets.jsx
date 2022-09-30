import './widgets.scss'
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import Person3OutlinedIcon from '@mui/icons-material/Person3Outlined';
import InventoryOutlinedIcon from '@mui/icons-material/InventoryOutlined';
import CalculateOutlinedIcon from '@mui/icons-material/CalculateOutlined';

const Widgets = ({type}) => {

    const percentage = 10
let data;

    switch (type){
        case "users": 
            data ={
                title:'USERS',
                total :25000,
                isMoney:false,
                link:'see all users',
                icon : <Person3OutlinedIcon className='user-icon'/>
            };
            break;

            case "orders": 
            data ={
                title:'ORDERS',
                isMoney:false,
                total:5000,
                link:'view all orders',
                icon : <InventoryOutlinedIcon className='user-icon'/>
            };
            break;

            case "finance": 
            data ={
                title:'Finance',
                isMoney:true,
                link:'see details',
                amount:5200,
                icon : <CalculateOutlinedIcon className='user-icon'/>
            };
            break;
        
            default:
                break;
        
    }

  return (
    <div className='widget-wrapper'>
        <div className='left'>
            <span className='title-user'>{data.title}</span>
            <span className='counter'>{data.isMoney ?  data.amount : data.total}</span>
            <span className='link'>{data.link}</span>

        </div>
        <div className='right'>
            <div className='percentage negative'>
                <ArrowDropUpIcon/>
                {percentage}%
            </div>
            {data.icon}
        </div>
    </div>
  )
}

export default Widgets