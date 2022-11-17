import React from 'react'
import icon from '../../assets/login.png';



const loginImg = {
    
    width:'30px',
    height:'30px',
    borderRadius:'10px',
    cursor:'pointer'

}




export const LoginIcon = () => {
  return (
    <div>
      <img style={loginImg} src={icon} alt="logo" /> 
    
    </div>
  )
}
