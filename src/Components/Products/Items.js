import React from 'react'
import { BiSearch } from 'react-icons/bi'
import { BsGrid } from 'react-icons/bs'
import { GiHamburgerMenu } from 'react-icons/gi'
import classes from '../../Styles/Products.module.css'

function Items() {
    return (
        <div className={classes.itemsmain}>
            <div className={classes.itemcont}>
                <div className={classes.searchmain}>
                    <div className={classes.searchcont}>
                        <span className={classes.searchtxt}>
                            <input type='text' placeholder='Search here' />
                        </span>
                        <span className={classes.searchlogo}><BiSearch size={22} /></span>
                    </div>
                    <div className={classes.action}>
                        <select className={classes.actioncont} id="cars" name="cars" placeholder='Action'>
                            <option value="Action">Action</option>
                            <option value="saab">Saab</option>
                            <option value="fiat">Fiat</option>
                            <option value="audi">Audi</option>
                        </select>

                        <div className={classes.grid}><BsGrid size={20}/></div>
                        <div className={classes.burger}><GiHamburgerMenu size={20} /></div>
                    </div>
                </div>
                <div>
                    <div>
                        <img className={classes.imgx} src={require('../../Asset/Card-1 Apple Watch.png')} alt='' />
                        <img className={classes.imgx} src={require('../../Asset/Card-1 Apple Watch.png')} alt='' />
                    </div>
                    <div>
                        <img className={classes.imgx} src={require('../../Asset/Card-1 Apple Watch.png')} alt='' />
                        <img className={classes.imgx} src={require('../../Asset/Card-1 Apple Watch.png')} alt='' />
                    </div>
                    <div>
                        <img className={classes.imgx} src={require('../../Asset/Card-1 Apple Watch.png')} alt='' />
                        <img className={classes.imgx} src={require('../../Asset/Card-1 Apple Watch.png')} alt='' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Items