import React from 'react'
import classes from '../../Styles/Products.module.css'
import { IoIosArrowForward } from 'react-icons/io'
import { IoIosArrowBack } from 'react-icons/io'

export const Bottom = () => {
  return (
    <div className={classes.bottomcont}>
        <div className={classes.arrowback}><IoIosArrowBack /></div>
        <div className={classes.numbercont}>
            <p className={classes.no1}>1</p>
            <p className={classes.no1}>2</p>
            <p className={classes.no1}>3</p>
            <p className={classes.no1}>4</p>
            <p className={classes.no1}>5</p>
            <p className={classes.no6}>6</p>
            <p className={classes.no1}>7</p>
            <p className={classes.no1}>8</p>
            <p className={classes.no1}>9</p>
            <p className={classes.no1}>10</p>
        </div>
        <div className={classes.arrowforward}><IoIosArrowForward /></div>
    </div>
  )
}

export default Bottom