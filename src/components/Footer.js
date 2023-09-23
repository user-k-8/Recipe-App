import React from 'react'
import logo from '../components/assets/logo2.png'

const Footer = () => {
  return (
    <>
        <footer>
        <div className='footer-logo-container'>
        <img class="footer-logo" src={logo} alt="Little Lemon logo"/>
        </div>
        <div className='copyright'>
            <hr className='footer-line'/>
            <p>Copyright Ultimate Recipe Book 2023</p>
        </div>
    </footer>
    </>
  )
}

export default Footer