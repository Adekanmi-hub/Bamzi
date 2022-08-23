import React from 'react'
import classes from '../../Styles/Description.module.css'

import { IoIosCart } from 'react-icons/io'
import { BiSearch } from 'react-icons/bi'
import { VscCircleLargeFilled } from 'react-icons/vsc'
import { FiHeart } from 'react-icons/fi'

export const Navbar = () => {
    return (
        <div className={classes.Navbar}>
            <div className={classes.Navbarcont}>
                <img className={classes.logo} src={require('../../Asset/BAMZI.png')} alt='' />
                <div className={classes.Navtxt}>
                    <span className={classes.Navtxt1}>Products</span>
                    <span className={classes.Navtxt2}>Stores</span>
                </div>
                <div className={classes.searchcont}>
                    <span className={classes.searchtxt}>
                        <input type='text' placeholder='Search anything' />
                    </span>
                    <span className={classes.searchlogo}><BiSearch size={22} /></span>
                </div>
                <div className={classes.wishlistcont}>
                    <span className={classes.wishlisttxt}>Wishlist</span>
                    <span className={classes.wishlistheart}><FiHeart size={28} /></span>
                    <span className={classes.wishlistnot}><VscCircleLargeFilled /></span>
                </div>
                <div className={classes.cartcont}>
                    <span className={classes.carttxt}>Cart</span>
                    <span className={classes.cartlogo}><IoIosCart size={28} /></span>
                    <span className={classes.cartnot}><VscCircleLargeFilled /></span>
                </div>
                <img className={classes.profile} src={require('../../Asset/avatar-0.jpg')} alt='' />
            </div>
        </div>
    )
};

export default Navbar