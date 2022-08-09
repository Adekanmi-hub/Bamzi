import React from 'react'
import classes from '../../Styles/Prelaunch.module.css'

export const Head = () => {
  return (
    <div>
      <div className={classes.head}>
        <div className={classes.headimg}>
          <span>
            <img className={classes.logo} src={(require('../../Asset/BAMZI.png'))} alt="" />
          </span>
          <span className={classes.headnav}>
            <div className={classes.link1}>
              <a className={classes.headlink} href="www.bamzi.com/contact" style={{ color: "#000033" }} >Contact Us</a>
            </div>
            <div className={classes.link2}>
              <a className={classes.headlink} href="www.bamzi.com/Features" style={{ color: "#000033" }}>Features</a>
            </div>
          </span>
        </div>
      </div>
    </div>
  )
}

export default Head
