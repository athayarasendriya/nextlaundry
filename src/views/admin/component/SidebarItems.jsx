import React from 'react'
import { Link } from "react-router-dom"
import styles from '../../../style'

const SidebarItems = ({locationNow, itemPath, itemName, icon }) => {
  return (
      <Link to={itemPath} 
      className={`flex items-center gap-3 p-3 rounded-sm   opacity-100 text-white ${locationNow.pathname.includes(itemPath) && " bg-royalBlue opacity-100 text-white font-bold hover:bg-royalBlue"}
      `}> <img src={icon} alt="" />
      <p className={`${styles.sidebartext}`}>{itemName}</p>
    </Link>
  )
}

export default SidebarItems