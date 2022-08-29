import React from 'react'
import classes from '../../Styles/CustomizeShop.module.css'
import { IoCubeOutline } from 'react-icons/io5'

export const Section2 = () => {
    return (
        <div className={classes.sect2}>
            <div className={classes.sect2row}>
                <div className={classes.sect2row1}>
                    <div className={classes.sect2cube}><IoCubeOutline size={50} /></div>
                    <p className={classes.sect2shop}>Customize Shop</p>
                </div>
                <button className={classes.sect2btn}>Save</button>
            </div>
            <div className={classes.sect2row2}>
                <div className={classes.sect2rowcont1}>
                    <p className={classes.sect2storeinfo}>Store Info</p>
                    <div className={classes.sect2formcont}>
                        <form className={classes.sect2formmain}>
                            <input type={'text'} placeholder='Store Name' /><br /><br />
                            <textarea>Store Description Max (40)</textarea>
                            <label>This is a short description of what your store offers. Be short, precise and brief as this is what customers would see.</label><br />
                            <input type={'text'} placeholder='Store full legal address' /><br />
                            <input type={'text'} placeholder='Nigeria' />
                            <input type={'text'} placeholder='State' /><br />
                            <input type={'number'} placeholder='Business Contact' />
                            <input type={'text'} placeholder='Additional Info' />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Section2