import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AddUser from '../layout/addUser'
import InboxLayout from '../layout/inboxLayout'

const InboxPage = () => {
  return (
    <Routes>
      <Route path='/'  element={<InboxLayout/>} />
      <Route path='/add'  element={<AddUser/>} />
    </Routes>
  )
}

export default InboxPage
