import './datatables.scss'
import {DataGrid} from '@mui/x-data-grid'
import {UsersCols, UserRows} from '../../data/UserData'
import VisibilityIcon from '@mui/icons-material/Visibility';
import DeleteIcon from '@mui/icons-material/Delete';
import { useNavigate } from 'react-router-dom';
const DataTables = () => {

  const navigate = useNavigate()

  const actionColumn = [
    {field:'action', headerName:'Actions', width:'140', align:'center', renderCell:()=>{
      return (
        <div className='cell-actions'>
            <VisibilityIcon className='action-icon'/>
            <DeleteIcon className='action-icon'/>
        </div>
      )
    }}
  ]
  return (
    <div className='datatables'>
        <DataGrid
        rows={UserRows}
        columns={UsersCols.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
        disableSelectionOnClick={true}
        disableColumnSelector
        />
    </div>
  )
}

export default DataTables