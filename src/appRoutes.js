import React from 'react'
import {BrowserRouter,Routes,Route, Link} from "react-router-dom"
import AppTodo from './comps/appTodo'

import Cars from './comps/cars'

import Home from './comps/home'
import Page404 from './comps/page404'


export default function AppRoutes() {
  return (
    <BrowserRouter>
        {/* HEADER */}
        <header className='container-fluid shadow-sm'>
          <div className='container p-2'>
          <Link to="/" className='me-2'>Home</Link>
          <Link to="/cars" className='me-2'>Cars</Link>
          <Link to="/todo" className='me-2'>To do</Link>


          </div>
        </header>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/cars" element={<Cars />} />
          <Route path="/todo" element={<AppTodo />} />

          <Route path="/*" element={<Page404 />} />
        </Routes>
        {/* footer */}
    </BrowserRouter>
  )
}
