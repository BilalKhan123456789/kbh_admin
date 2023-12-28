import React from 'react'
import Navegation from './Config/Navegation'
import './App.css'
import { useNavigate } from 'react-router-dom'

import logo from '../src/Assets/logo.png'

function App() {
const nav = useNavigate()
  const next1=()=>{
nav('/')
  }

  const next2=()=>{
    nav('/Phone')
      }

      const next3=()=>{
        nav('/Showcards')
          }

          const next4=()=>{
            nav('/kidscollect')
              }

              const next5=()=>{
                nav('/Video')
                  }
    

    
         

  return (
    <>
    <div style={{position:"fixed"}}>
    <div className="w3-sidebar w3-light-grey w3-bar-block" style={{width:"20%"}} >
<img src="https://iconape.com/wp-content/files/pd/194086/svg/194086.svg" style={{width:"200px",marginTop:"30px",marginLeft:"20px"}} />
  <ul >
    {/* <li ><button  onClick={()=>next1()}   >Dashbord</button>  </li> */}
    <li ><button  onClick={()=>next2()}  >Add Post </button> </li>
    <li ><button  onClick={()=>next5()}  >Add Videos </button> </li>
    <li ><button   onClick={()=>next3()}  >Donations</button> </li>
    <li ><button   onClick={()=>next4()}  >Requests</button> </li>
    

  </ul>
</div>
      </div>
      <Navegation/>

    </>
  )
}

export default App
