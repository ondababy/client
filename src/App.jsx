import React from 'react'
import { Routes, Route } from 'react-router-dom'
import ShowBrand from './Components/Brand/ShowBrand'
import NewBrand from './Components/Brand/CreateBrand'
import DeleteBrand from './Components/Brand/DeleteBrand'
import EditBrand from './Components/Brand/EditBrand'
import IndexBrand from './Components/Brand/IndexBrand'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<IndexBrand />} />
      <Route path='/brands/create' element={<NewBrand />} />
      <Route path='/brand/details/:id' element={<ShowBrand />} />
      <Route path='/brand/edit/:id' element={<EditBrand />} />
      <Route path='/brand/delete/:id' element={<DeleteBrand />} />
    </Routes>
  )
}

export default App