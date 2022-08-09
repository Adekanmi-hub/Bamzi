import React from 'react'
import classes from '../../Styles/Dashboard.module.css'
import { AiOutlineInfoCircle } from 'react-icons/ai'
import { IoIosArrowDropdown } from 'react-icons/io'

export const Section4 = () => {
    return (
        <div className={classes.sect4}>
            <div className={classes.sect4flex1}>
                <div className={classes.sect4cont}>
                    <div className={classes.sect4txt}>Lead sales</div>
                    <div className={classes.sect4icon1}><AiOutlineInfoCircle /></div>
                </div>
                <hr className={classes.hr1} />
                <img className={classes.sect4img} src={require('../../Asset/SD Dashboard1.png')} alt='' />
            </div>
            <div className={classes.sect4flex2}>
                <div className={classes.sect4cont1}>
                    <div className={classes.sect4txt1}>Latest tickets</div>
                    <div className={classes.sect4icon1}><AiOutlineInfoCircle /></div>
                </div>
                <hr className={classes.hr1} />
                <div className={classes.sect4cont2}>
                    <span className={classes.sect4txt2}>Ticket</span>
                    <span className={classes.sect4sn1}>#4231852</span>
                </div>
                <p className={classes.sect4txt3}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <hr className={classes.hr2} />
                <div className={classes.sect4cont3}>
                    <span className={classes.sect4txt4}>Ticket</span>
                    <span className={classes.sect4sn2}>#5641310</span>
                </div>
                <p className={classes.sect4txt5}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum, facere non. Doloremque et enim minima sequi exercitationem?</p>
                <hr className={classes.hr3} />
                <div className={classes.sect4cont4}>
                    <span className={classes.sect4txt6}>Ticket </span>
                    <span className={classes.sect4sn3}>#856086</span>
                </div>
                <p className={classes.sect4txt7}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <div className={classes.sect4icon2}><IoIosArrowDropdown size={40} /></div>
            </div>


        </div>
    )
}
export default Section4