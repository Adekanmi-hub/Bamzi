import React from 'react'
import { IoIosNotificationsOutline } from 'react-icons/io'
import { BiHide } from 'react-icons/bi'
import { MdAccountBalance, MdMailOutline } from 'react-icons/md'
import { GiPlainCircle } from 'react-icons/gi'
import { FaStore } from 'react-icons/fa'
import classes from '../../Styles/CustomizeShop.module.css'

export const Section1 = () => {
  return (
    <div className={classes.sect1}>
      <div className={classes.sect1cont1}>
        <span className={classes.sect1bal}><MdAccountBalance size={25} /></span>
        <span className={classes.sect1amount}>Account : $12,990</span>
      </div>

      <span className={classes.sect1hide}><BiHide size={30} /></span>
      <div className={classes.sect1cont2}>
        <span className={classes.sect1notify}><IoIosNotificationsOutline size={28} /></span>
        <span className={classes.sect1not}><GiPlainCircle size={13} /></span>
      </div>
      <div className={classes.sect1cont3}>
        <span className={classes.sect1mail}><MdMailOutline size={25} /></span>
        <span className={classes.sect1not1}><GiPlainCircle size={13} /></span>
      </div>
      <span className={classes.sect1shop}><FaStore size={28} /></span>
      <p className={classes.sect1evans}>Evans Bex Electronics Store</p>
      <img className={classes.sect1img} src={require('../../Asset/Phones.jpg')} alt='' />
    </div>
  )
}

export default Section1