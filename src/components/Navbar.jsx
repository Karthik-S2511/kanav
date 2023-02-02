import React from 'react'
import styles from '../components/Navbar.module.css'
import logo from '../assets/logo1.png'

const Navbar = () => {
 return (
  <div className={styles.navbar}>
   <nav className={styles.nav}>
    <div className={styles.logotext}>
     <a href='#' className={styles.logo}>
      <img src={logo} alt='logo' className={styles.logoimg}></img>
     </a>
    </div>

    <ul>
     <li>
      <a href='#'>
       <b>HOME</b>
      </a>
     </li>
     <li>
      <a href='#'>
       <b>PRODUCTS</b>
      </a>
     </li>
     <li>
      <a href='#'>
       <b>ABOUT US</b>
      </a>
     </li>
     <li>
      <a href='#'>
       <b>CONTACT US</b>
      </a>
     </li>
    </ul>
   </nav>
  </div>
 )
}

export default Navbar
