import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import { db } from '../Config/firebase';
import {  ref,get} from "firebase/database";
import { Button } from "react-bootstrap";




function Order() {
    const [data,setdata] = useState([])


    useEffect(()=>{
        let data1 = ref(db,"Order_Collection")
       
           get(data1).then((snap) => {
               console.log(snap.val())
               if(snap.val()!=null){
              console.log(Object.values(snap.val()));
              setdata(Object.values(snap.val()))
               }
       
           })
               .catch((e) => console.log(e.code))
         
       
       },[])
       




  return (
    <div style={{marginLeft:"22%"}}>
        <br /> <br />
        <h1>User Order</h1>
<br /> <br />
        <Table responsive="lg">
     <thead>
          <tr>
            <th>S No</th>
            <th>Title</th>
            <th>User Name</th>
            <th>Email</th>
            <th>Address</th>
            <th>Number</th>
            <th>Image</th>
            <th>City</th>
            <th>Size</th>
            <th>Price</th>
            <th>Approved</th>
          </tr>
        </thead>
<tbody>
{



  data.map((v,i)=>{
return(
  <>
      <tr>
    <td>{i}</td>
    <td>{v.title}</td>
    <td>{v.fname}</td>
    <td>{v.email}</td>
    <td>{v.address}</td>
    <td>{v.number}</td>
        <td><img  style={{height:"50px",width:"100px",objectFit:"contain"}} src={v.img}/></td>
        <td>{v.city}</td>
        <td>{v.confirmsize}</td>
        <td>{v.price}</td>
        <td><Button  variant="outline-primary">Approved</Button></td>

  </tr>
  </>
)

  })
}



</tbody>




      
      </Table>



      
    </div>
  )
}

export default Order
