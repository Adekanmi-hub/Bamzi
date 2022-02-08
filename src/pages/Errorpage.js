import React from "react"
import styles from "../styles/errorpage.module.css"
import { Link } from "react-router-dom"
import { IoIosWarning } from "react-icons/io"

export default function Errorpage() {
  return (
    <div>
      <div className={styles.maincontent}>
        <div className={styles.header}>
          <Link to="/">
            <img src={require("../assets/BAMZI.png")} width={"60"} />
          </Link>
        </div>

        <div className={styles.page}>
          <div className={styles.leftcontent}>
            <div className={styles.pagetitle}>
              <h1>Page Not Found</h1>
            </div>

            <div className={styles.pageimage}>
              <img src={require("../assets/Cart404.png")} />
            </div>
          </div>

          <div className={styles.rightcontent}>
            <div className={styles.error}>
              <span>
                <IoIosWarning size={24} color={"#f1a79c"} style={{display: "inline-block"}}/> OOPs!!! Looks like the page you are looking for is not available
                or is missing, kindly contact us for any further problem.
              </span>

              <button className={styles.button}>Go to Homepage</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
