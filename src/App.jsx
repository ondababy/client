import React from 'react'
import { Routes, Route } from 'react-router-dom'
import ShowBrand from './Components/Brand/ShowBrand'
import NewBrand from './Components/Brand/CreateBrand'
import DeleteBrand from './Components/Brand/DeleteBrand'
import EditBrand from './Components/Brand/EditBrand'
import IndexBrand from './Components/Brand/IndexBrand'

import IndexSupplier from './Components/Supplier/IndexSupplier'
import ShowSupplier from './Components/Supplier/ShowSupplier'
import NewSupplier from './Components/Supplier/CreateSupplier'
import DeleteSupplier from './Components/Supplier/DeleteSupplier'
import EditSupplier from './Components/Supplier/EditSupplier'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<IndexBrand />} />
      <Route path='/brands/create' element={<NewBrand />} />
      <Route path='/brand/details/:id' element={<ShowBrand />} />
      <Route path='/brand/edit/:id' element={<EditBrand />} />
      <Route path='/brand/delete/:id' element={<DeleteBrand />} />

      <Route path='/suppliers' element={<IndexSupplier />} />
      <Route path='/suppliers/create' element={<NewSupplier />} />
      <Route path='/supplier/details/:id' element={<ShowSupplier />} />
      <Route path='/supplier/edit/:id' element={<EditSupplier />} />
      <Route path='/supplier/delete/:id' element={<DeleteSupplier />} />
    </Routes>
  )
}

export default App