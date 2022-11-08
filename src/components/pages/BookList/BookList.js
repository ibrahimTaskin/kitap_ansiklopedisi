import React from 'react'
import { BookSummary } from './BookSummary'

export const BookList = () => {
  return (
    <div className='book-list section'>
        <BookSummary />
        <BookSummary />
        <BookSummary />
        <BookSummary />
        <BookSummary />
    </div>
  )
}
