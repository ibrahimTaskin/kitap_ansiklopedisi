import React from 'react'
import { BookList } from '../pages/BookList/BookList'
import { Notification } from './Notification'

export const Dashboard = () => {
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
