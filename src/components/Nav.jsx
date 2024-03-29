import React, { useState } from 'react'
import'./nav.css'

function Nav() {
    const [show,setShow]=useState(false)
    window.addEventListener('scroll',()=>{
            if(window.scrollY>600) {
                setShow(true)
            }
          else{
            setShow(false)
          }
    })
  return (
    <div className={`nav ${show && 'nav-black'}`}>
        <img src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png" width={'130px'} alt="logo" />
    </div>
  )
}

export default Nav