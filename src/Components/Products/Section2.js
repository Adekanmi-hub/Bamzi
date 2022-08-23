import React from 'react'
import classes from '../../Styles/Products.module.css'

export const Section2 = () => {
    return (
        <div className={classes.filtercont}>
            <p className={classes.filter}>Filters</p>
            <p className={classes.result}>7,618 results found in 5ms</p>
        </div>
    )
}

export default Section2