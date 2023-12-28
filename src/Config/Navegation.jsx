import React from 'react'
import { Route, Routes } from 'react-router-dom'
// import Dasbord from '../Compunets/Dasbord'
import Phone from '../Compunets/Post'
// import Oders from '../Compunets/Oders'
import ShowCards from '../Compunets/Donation'
import KidsCollect from '../Compunets/Request'
import Order from '../Compunets/Order'
import Videos from '../Compunets/Videos'

function Navegation() {
  return (
    <div>
     <Routes>
         {/* <Route path='/' element={<Dasbord/>}></Route> */}
        <Route path='/Phone' element={<Phone/>}></Route>
        <Route path='/Video' element={<Videos/>}></Route>

        {/* <Route path='/Oders' element={<Oders/>}></Route> */}
        <Route path='/Showcards' element={<ShowCards/>}></Route>
        <Route path='/kidscollect' element={<KidsCollect/>}></Route>
        <Route path='/order' element={<Order/>}></Route>




        </Routes> 

    </div>
  )
}

export default Navegation

