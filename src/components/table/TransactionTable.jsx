import './table.scss'
import {TableContainer, Table, Paper, TableHead, TableBody, TableCell, TableRow} from '@mui/material'



const TableData = [{
  "id": 1,
  "first_name": "Appetizer - Assorted Box",
  "email": "olemonnier0@washingtonpost.com",
  "image": "http://dummyimage.com/182x100.png/ff4444/ffffff"
}, {
  "id": 2,
  "first_name": "Hummus - Spread",
  "email": "amacdonnell1@desdev.cn",
  "image": "http://dummyimage.com/112x100.png/cc0000/ffffff"
}, {
  "id": 3,
  "first_name": "Soup - Base Broth Beef",
  "email": "cmapson2@cocolog-nifty.com",
  "image": "http://dummyimage.com/103x100.png/ff4444/ffffff"
}, {
  "id": 4,
  "first_name": "Hersey Shakes",
  "email": "acrannis3@i2i.jp",
  "image": "http://dummyimage.com/167x100.png/5fa2dd/ffffff"
}, {
  "id": 5,
  "first_name": "Nori Sea Weed - Gold Label",
  "email": "lsoall4@mediafire.com",
  "image": "http://dummyimage.com/126x100.png/dddddd/000000"
}, {
  "id": 6,
  "first_name": "Pepper - Chili Powder",
  "email": "cginni5@illinois.edu",
  "image": "http://dummyimage.com/229x100.png/5fa2dd/ffffff"
}, {
  "id": 7,
  "first_name": "Wine - Duboeuf Beaujolais",
  "email": "spavluk6@yelp.com",
  "image": "http://dummyimage.com/191x100.png/5fa2dd/ffffff"
}, {
  "id": 8,
  "first_name": "Waffle Stix",
  "email": "pchatterton7@gravatar.com",
  "image": "http://dummyimage.com/209x100.png/ff4444/ffffff"
}, {
  "id": 9,
  "first_name": "Puree - Pear",
  "email": "jrampling8@multiply.com",
  "image": "http://dummyimage.com/132x100.png/dddddd/000000"
}, {
  "id": 10,
  "first_name": "Muffin Batt - Choc Chk",
  "email": "kscopyn9@nps.gov",
  "image": "http://dummyimage.com/232x100.png/cc0000/ffffff"
}]


const TransactionTable = () => {
  return (
    <TableContainer component={Paper} className='table-wrapper' >
      <Table sx={{minWidth:650}} aria-label='simple-table' stickyHeader>
          <TableHead>
            <TableRow>
              <TableCell>Id</TableCell>
              <TableCell>Name</TableCell>
              
              <TableCell align='center'>Email</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {TableData.map((row)=>{
              return (
                <TableRow key={row.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                  <TableCell >{row.id}</TableCell>
                  <TableCell>
                    <div className='img-wrapper'>
                        <img src={row.image} alt={row.first_name} className='image'/>
                        {row.first_name}
                    </div>
                  </TableCell>
                  <TableCell align='center'>{row.email}</TableCell>

                </TableRow>
              )
            })}
          </TableBody>
      </Table>
    </TableContainer>
  )
}

export default TransactionTable