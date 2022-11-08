import React, { Children } from 'react'
import { Navbar } from '../layout/Navbar'
import { BookList } from '../pages/BookList/BookList'
import { Notification } from './Notification'

export const Dashboard = ({children}) => {
  return (
   <div className='dashboard container'>
        <div className='row'>
            <div className="col s12 m6 l4"><BookList /></div>
            <div className="col s12 m6 l8">
                <Notification/>
            </div>
        </div>
   </div>
  )
}
