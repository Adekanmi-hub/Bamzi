import React from 'react'
import classes from '../../Styles/Products.module.css'

export const Multirange = () => {
    return (
        <div className={classes.multirangecont}>
            <p className={classes.multirange}>Multi Range</p>
            <div className={classes.pricerangecont}>
                <input type={'radio'} name='range' id='$10' />
                <label className={classes.pricerange} htmlFor='$10'>$10</label><br />
                <input type={'radio'} name='range' id='$10-$100' />
                <label className={classes.pricerange} htmlFor='$10-$100'>$10-$100</label><br />
                <input type={'radio'} name='range' id='$100-$500' />
                <label className={classes.pricerange} htmlFor='$100-$500'>$100-$500</label><br />
                <input type={'radio'} name='range' id='$500' />
                <label className={classes.pricerange} htmlFor='$500'>$500</label><br />
                <input type={'radio'} name='range' id='All' />
                <label className={classes.pricerange} htmlFor='All'>All</label><br />
            </div>
        </div>
    )
}

export default Multirange