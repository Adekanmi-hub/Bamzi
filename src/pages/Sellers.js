import React, { useState } from "react"
import { FaQuestionCircle, FaHeart } from "react-icons/fa"
import { MdNotificationsActive } from "react-icons/md"
import { GrPowerForceShutdown } from "react-icons/gr"
import { IoIosArrowDropdown } from "react-icons/io"

import { HiUsers } from "react-icons/hi"
import styles from "../styles/sellers.module.css"
import Sidebar from "../components/sidebar"
import SellersHeader from "../components/SellersHeader"

export default function Sellers() {
  const [showSidebar, setShowSidebar] = useState(false)

  return (
    <div className={styles.mainContainer}>
      <Sidebar showSidebar={showSidebar} />

      <div className={styles.mainContent}>
        <SellersHeader
          setShowSidebar={setShowSidebar}
          showSidebar={showSidebar}
        />
        <div className={styles.quick}>
          <h4>Quick Stats</h4>
        </div>
        <div className={styles.cards}>
          <div className={styles.total}>
            <h6>Total Sales</h6>
            <h2>28,345</h2>
          </div>
          <div className={styles.bad}>
            <FaQuestionCircle
              size={12}
              style={{
                position: "absolute",
                color: "white",
                top: "0.5rem",
                right: "0.5rem",
              }}
            />
            <h6>Bad goods</h6>
            <h2>120 errors</h2>
          </div>
          <div className={styles.pending}>
            <FaQuestionCircle
              size={12}
              style={{
                position: "absolute",
                color: "white",
                top: "0.5rem",
                right: "0.5rem",
              }}
            />
            <h6>pending sales</h6>
            <h2>120</h2>
          </div>
          <div className={styles.wishlist}>
            <FaQuestionCircle
              size={12}
              style={{
                position: "absolute",
                color: "black",
                top: "0.5rem",
                right: "0.5rem",
              }}
            />
            <h6>Wishlist Store</h6>
            <span>
              <h2>500</h2>
              <FaHeart color={"#fdd25a"} />
            </span>
          </div>
          <div className={styles.customer}>
            <FaQuestionCircle
              size={12}
              style={{
                position: "absolute",
                color: "black",
                top: "0.5rem",
                right: "0.5rem",
              }}
            />
            <h6>customers</h6>
            <span>
              <h2>829</h2>
              <HiUsers />
            </span>
          </div>
        </div>
        <div
          classname={styles.all}
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
          }}
        >
          <div className={styles.latest}>
            <h6>Latest Sales(28)</h6>
            <div
              classname={styles.sound}
              style={{ display: "flex", marginTop: "20px" }}
            >
              <div
                classname={styles.next}
                style={{
                  width: "64px",
                  height: "64px",
                  padding: "0.5rem",

                  border: "1px solid blue",
                  borderRadius: "0.3rem",
                }}
              >
                <img src={require("../assets/iphone.png")} alt="" />
              </div>
              <div
                classname={styles.iphones}
                style={{
                  marginLeft: "20px",
                  whiteSpace: "nowrap",
                  marginRight: "80px",
                }}
              >
                <p>iphone X 6 GB Ram</p>
                <span
                  classname={styles.newQty}
                  style={{
                    display: "flex",
                  }}
                >
                  <p style={{ marginRight: "20px", fontSize: "1.2rem" }}>QTY</p>
                  <p
                    style={{
                      backgroundColor: "grey",
                      width: "50px",
                      textAlign: "center",
                      borderRadius: "0.75rem",
                      padding: "0.1rem",
                    }}
                  >
                    6
                  </p>
                </span>
                <p style={{ color: "yellow", marginTop: "5px" }}>$1500</p>
              </div>
              <div classname={styles.time} style={{ whiteSpace: "nowrap" }}>
                <p>30min ago</p>
              </div>
            </div>

            <div
              classname={styles.phones}
              style={{ display: "flex", marginTop: "20px" }}
            >
              <div
                classname={styles.phone2}
                style={{
                  width: "64px",
                  height: "64px",
                  padding: "0.5rem",
                  border: "1px solid blue",
                  borderRadius: "0.3rem",
                }}
              >
                <img src={require("../assets/iphone.png")} alt="" />
              </div>
              <div
                classname={styles.newPhone}
                style={{
                  marginLeft: "20px",
                  whiteSpace: "nowrap",
                }}
              >
                <p>iwatch X + free pouch and</p>
                <p>Extra case</p>
                <span classname={styles.newQtys} style={{ display: "flex" }}>
                  <p style={{ marginRight: "20px", fontSize: "1.2rem" }}>QTY</p>
                  <p
                    style={{
                      backgroundColor: "grey",
                      width: "50px",
                      textAlign: "center",
                      borderRadius: "0.75rem",
                      padding: "0.1rem",
                    }}
                  >
                    1
                  </p>
                </span>
                <p style={{ color: "yellow" }}>$1500</p>
              </div>
              <div
                classname={styles.hour}
                style={{ marginLeft: "20px", whiteSpace: "nowrap" }}
              >
                <p>2 hours</p>
              </div>
            </div>

            <button id={styles.btn}>View Sales</button>
          </div>
          <div
            className={styles.besideLatest}
            style={{
              display: "flex",
              marginTop: "100px",
              marginLeft: "20px",
              width: "50%",
              alignItems: "flex-start",
            }}
          >
            <div
              classname={styles.errorOrder}
              style={{
                backgroundColor: "#fdd25a",
                marginRight: "20px",
                borderRadius: "0.5rem",
                padding: "0.75rem 0.5rem",
                width: "50%",
              }}
            >
              <MdNotificationsActive
                size={24}
                style={{
                  color: "black",
                  backgroundColor: "white",
                  borderRadius: "50%",
                  marginBottom: "0.25rem",
                }}
              />
              <p
                style={{
                  fontSize: "1.25rem",
                  lineHeight: "1.75rem",
                  marginBottom: "0.25rem",
                }}
              >
                Error in Order
              </p>
              <p
                style={{
                  fontSize: "0.75rem",
                  lineHeight: "1rem",
                }}
              >
                You have an urgent package to take care of please check this and
                revert to them
              </p>
            </div>
            <div
              classname={styles.Congratulations}
              style={{
                backgroundColor: "grey",
                borderRadius: "0.5rem",
                padding: "0.75rem 0.5rem",
                width: "50%",
              }}
            >
              <p style={{ fontSize: "0.75rem" }}>Congratulations John!</p>
              <p style={{ fontSize: "0.6rem" }}>Best Seller of the month</p>
              <h2 style={{ fontSize: "1.25rem" }}>$89k</h2>
              <div classname={styles.john} style={{ fontSize: "0.6rem" }}>
                <p>You have done 57% more sale today</p>
              </div>
              <button id={styles.btn1}>View Sales</button>
            </div>
          </div>
        </div>
        <div
          classname={styles.newLatest}
          style={{
            display: "flex",
            flexDirection: "row",
            marginTop: "25px",
          }}
        >
          <div
            classname={styles.chart}
            style={{
              backgroundColor: "white",
              width: "60%",
              borderRadius: "1rem",
              padding: "1rem",
              marginRight: "24px",
            }}
          >
            <span
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItem: "centre",
              }}
            >
              <p style={{ fontSize: "0.8rem", fontWeight: "bold" }}>
                Lead Sales
              </p>
              <GrPowerForceShutdown
                size={12}
                style={{
                  color: "black",
                  right: "10",
                  top: "0.5rem",
                }}
              />
            </span>
            <hr></hr>
            <img
              src={require("../assets/SD Dashboard.png")}
              alt=""
              style={{ width: "100%" }}
            />
          </div>
          <div
            classname={styles.latestTicket}
            style={{
              backgroundColor: "white",
              width: "40%",
              borderRadius: "1rem",
              padding: "1.5rem",
            }}
          >
            <span
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItem: "centre",
              }}
            >
              <p
                style={{
                  fontSize: "0.8rem",
                  fontWeight: "bold",
                  margin: "10px",
                }}
              >
                Latest Tickets
              </p>

              <GrPowerForceShutdown
                size={12}
                style={{
                  color: "black",
                  right: "0.5rem",
                  top: "0.5rem",
                }}
              />
            </span>

            <hr sales={{ Margin: "20px" }}></hr>

            <p style={{ fontSize: "0.7rem" }}>
              Ticket
              <span
                style={{
                  fontWeight: "bold",
                  marginTop: "20px",
                  padding: "0.75rem",
                  fontSize: "0.7rem",
                }}
              >
                #432182
              </span>
            </p>
            <p style={{ fontSize: "0.7rem", marginBottom: "15px" }}>
              Send us the participant for the ticket
            </p>
            <hr></hr>
            <p style={{ fontSize: "0.7rem" }}>
              Ticket
              <span style={{ fontWeight: "bold", fontSize: "0.7rem" }}>
                #432123
              </span>
            </p>
            <p style={{ fontSize: "0.7rem", marginTop: "10px" }}>
              Show us your name in the ticket and follow us
            </p>
            <hr style={{ margin: "10px" }}></hr>
            <p style={{ fontSize: "0.7rem" }}>
              Ticket
              <span style={{ fontWeight: "bold", fontSize: "0.7rem" }}>
                #654327
              </span>
            </p>
            <p style={{ fontSize: "0.7rem", marginTop: "10px" }}>
              Buy more of the ticket and send to the hospital
            </p>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: "0.25rem",
                alignItems: "center",
              }}
            >
              <IoIosArrowDropdown size={24} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
