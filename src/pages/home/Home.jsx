import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar';
import Navbar from '../../components/navbar/Navbar'
import './home.scss';
import Widgets from '../../components/widgets/Widgets';
import Featured from '../../components/featured/Featured';
import Charts from '../../components/charts/Charts';
import TransactionTable from '../../components/table/TransactionTable';






const Home = () => {
  return (
    <div className='home'>
        <Sidebar/>
        <div className='home-container'>
          <Navbar/>
          <div className='widgets'>
              <Widgets type ='users'/>
              <Widgets type='orders'/>
              <Widgets type='finance'/>
          </div>

          <div className='charts'>
            <Featured/>
            <Charts/>
          </div>

          <div className='user-list-container'>
            <div className='user-list-title'>Latest Transactions</div>
               <TransactionTable/>
          </div>
        </div>
    </div>
  )
}

export default Home