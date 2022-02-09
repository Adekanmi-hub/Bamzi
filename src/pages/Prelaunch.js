import React from "react"
import styles from "../styles/prelaunch.module.css"
import { Link } from "react-router-dom"

export default function Prelaunch() {
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.navBar}>
          <Link to="/">
            <img src={require("../assets/BAMZI.png")} width={"60"} />
          </Link>
          <div className={styles.navLinks}>
            <ul>
              <li>
                <a href="#">Contact Us</a>
              </li>
              <li>
                <a href="#">Features</a>
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.jumbo}>
          <div className={styles.content}>
            <h1>Get Ready, Online Stores Coming Through</h1>
            <p>
              Get awesome rewards and discounts, be the first to book your space
              in this awesome digital world. Join us on the train to greatness.
            </p>
            <div className={styles.contactForm}>
              <form method="get" action="login.php">
                <input
                  type="text"
                  name="name"
                  className={styles.name}
                  placeholder="Full Name"
                />

                <div className={styles.details}>
                  <input
                    type="text"
                    name="email"
                    className={styles.email}
                    placeholder="Email here"
                  />
                  <input
                    type="text"
                    name="industry"
                    className={styles.industry}
                    placeholder="Industry"
                  />
                </div>

                <div className={styles.buy}>
                  <div className={styles.buyer}>
                    <img
                      src={require("../assets/Icon ionic-ios-cart.png")}
                      width={"16px"}
                    />
                    <p>Buyer</p>
                  </div>
                  <div className={styles.seller}>
                    <img
                      src={require("../assets/Icon metro-shop.png")}
                      width={"16px"}
                    />
                    <p>Seller</p>
                  </div>
                </div>

                <div>
                  <button
                    type="submit"
                    className={styles.btn}
                    style={{ backgroundColor: "#000033" }}
                  >
                    Book your reservation
                  </button>
                </div>
              </form>
            </div>
          </div>

          <div className={styles.jumboImage}>
            <img src={require("../assets/Mask.png")} />
          </div>
        </div>
      </div>
    </div>
  )
}
