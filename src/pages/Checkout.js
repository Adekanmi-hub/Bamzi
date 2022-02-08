import React from "react";
import checkout from "../styles/checkout.module.css";
import { Link } from "react-router-dom";

export default function Checkout() {
  return (
    <div>
      <div className={checkout.containerBox}>
        <div className={checkout.menuBar}>
          <div className={checkout.menuLists}>
            <Link to="/">
              <img src={require("../assets/BAMZI.png")} width={"60"} />
            </Link>

            <ul>
              <li>
                <a href="#">Products</a>
              </li>
              <li>
                <a href="#">Stores</a>
              </li>
              <li>
                <div className={checkout.search}>
                  <input type="text" placeholder="Search anything" />
                  <svg
                    className={checkout.searchIcon}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    ></path>
                  </svg>
                </div>
              </li>
            </ul>
          </div>

          <div className={checkout.items}>
            <ul>
              <li>
                <a href="#">
                  <span className={checkout.linkItems}>
                    Whishlist{" "}
                    <svg
                      className={checkout.linkIcons}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                      ></path>
                    </svg>
                  </span>
                </a>
              </li>
              <li>
                <a href="#">
                  <span className={checkout.linkItems}>
                    Cart{" "}
                    <svg
                      className={checkout.linkIcons}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                      ></path>
                    </svg>
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className={checkout.wholePage}>
          <div className={checkout.contentLeft}>
            <div className={checkout.checkout}>Checkout</div>

            <div className={checkout.shippingInfo}>
              <h4>Shipping Information</h4>
              <button className={checkout.shipPlus}>+</button>
            </div>

            <div className={checkout.contactForm}>
              <form method="get" action="login.php">
                <h6>Basic Info</h6>

                <div className={checkout.inputSet1}>
                  <input
                    type="text"
                    name="name"
                    className={checkout.name}
                    placeholder="Name"
                  />
                  <input
                    type="number"
                    name="number"
                    className={checkout.number}
                    placeholder="+234     Phone Number"
                  />
                </div>

                <h6>Address</h6>

                <div className={checkout.inputSet2}>
                  <input
                    type="text"
                    name="address"
                    className={checkout.address}
                    placeholder="Street Address/Apartment Unit"
                  />
                  <input
                    type="text"
                    name="state"
                    className={checkout.state}
                    placeholder="State/Region"
                  />
                  <input
                    type="text"
                    name="city"
                    className={checkout.city}
                    placeholder="City"
                  />
                </div>
                <div className={checkout.inputSet3}>
                  <input
                    type="text"
                    name="country"
                    className={checkout.country}
                    placeholder="Nigeria"
                  />
                  <input
                    type="number"
                    name="Zip Code"
                    className={checkout.code}
                    placeholder="Zip Code"
                  />
                </div>
                <div className={checkout.saveDiv}>
                  <button type="submit" className={checkout.save} style={{backgroundColor: "#000033"}}>
                    Save and Continue
                  </button>
                  <div className={checkout.checkDiv}>
                    <input type="checkbox" className={checkout.checkbox} />
                    <label>Set as default</label>
                  </div>
                </div>
              </form>
            </div>

            <div className={checkout.payment}>
              <div className={checkout.paymentMethod}>Payment Method</div>

              <div className={checkout.paymentOptions}>
                <img src={require("../assets/D4a-image9.png")} width={"120"} />
                <img src={require("../assets/M2-image10.png")} width={"120"} />
                <img src={require("../assets/GooglePay.png")} width={"120"} />
              </div>
            </div>

            <div className={checkout.shopIn}>Shopping Summary (4)</div>
          </div>

          <div className={checkout.contentRight}>
            <div className={checkout.orderContent}>
              <div className={checkout.order}>
                <div className={checkout.orderHeader}>Order Summary</div>

                <div className={checkout.shippingDiv}>
                  <span className={checkout.spanShipping}>Shipping fee</span>
                  <span className={checkout.spanAmt}>$10.70</span>
                </div>
              </div>

              <div className={checkout.subtotalDiv}>
                <span className={checkout.spanSubtotal}>Sub total</span>
                <span className={checkout.spanSubamt}>$19.00</span>
              </div>

              <div className={checkout.coupWrapper}>
                <input
                  type="text"
                  className={checkout.orderCode}
                  placeholder="Coupon Code"
                />
                <div className={checkout.giftImage}>
                  <i className="fas fa-gift"></i>
                  <span className={checkout.giftLink}>My Gifts</span>
                </div>
              </div>

              <div className={checkout.totalDiv}>
                Total <span className={checkout.spanTotal}>$0.00</span>
              </div>

              <div className={checkout.submitBtn}>
                <button type="submit" className={checkout.orderButton}>
                  Proceed
                </button>
              </div>
            </div>

            <div className={checkout.pay}>
              <div className={checkout.secPay}>SECURED PAY</div>

              <div className={checkout.secPara}>
                Every Payments are secured with Bamzi and additional security is
                ensured with Money Gauranss.
              </div>

              <div className={checkout.paymentDiv}>
                <img
                  src="https://img.icons8.com/ios-filled/50/000000/shield.png"
                  className={checkout.image1}
                />
                <img
                  src="https://img.icons8.com/material-outlined/24/000000/recycle-sign.png"
                  className={checkout.image2}
                />
                <img
                  src="https://img.icons8.com/external-photo3ideastudio-flat-photo3ideastudio/64/000000/external-payment-supermarket-photo3ideastudio-flat-photo3ideastudio.png"
                  className={checkout.image3}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
