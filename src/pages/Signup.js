import React, { useState } from "react"
import { Link } from "react-router-dom"
import { SiGmail } from "react-icons/si"
import { FaFacebookSquare } from "react-icons/fa"
import AuthStrip from "../components/auth/AuthStrip"
import AuthCart from "../components/auth/AuthCart"
import AuthBody from "../components/auth/AuthBody"
import AuthContent from "../components/auth/AuthContent"
import AuthContainer from "../components/auth/AuthContainer"
import Header from "../components/header"
import axios from "axios"

export default function Signup() {
  const url = "http://localhost:3030/bamzi/signup"
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  })

  const handleSubmit = e => {
    e.preventDefault()
    axios
      .post(url, {
        name: data.name,
        email: data.email,
        password: data.password,
      })
      .then(res => {
        console.log(res)
      })
    setData({
      name: "",
      email: "",
      password: "",
    })
  }

  const onInputChange = e => {
    const newData = { ...data }
    newData[e.target.id] = e.target.value
    setData(newData)
    console.log(newData)
  }

  return (
    <AuthContainer>
      <Header bg />

      <AuthBody>
        <AuthStrip />

        <AuthContent>
          <div className="flex items-center lg:-mt-16 mb-1">
            <Link to="/login" className="p-0 w-1/2">
              <button className="py-2 w-full bg-gray-200 rounded-l-lg font-semibold">
                Sign In
              </button>
            </Link>
            <Link to="/signup" className="p-0 w-1/2">
              <button className="py-3 w-full bg-secondary rounded-lg shadow-sm font-semibold">
                Sign Up
              </button>
            </Link>
          </div>

          <button className="bg-gmail rounded-lg text-white py-2 flex justify-center items-center space-x-3">
            <SiGmail size={24} />
            <span className="font-semibold">Sign Up with Gmail</span>
          </button>
          <button className="bg-facebook rounded-lg text-white py-2 flex justify-center items-center space-x-3">
            <FaFacebookSquare size={24} />
            <span className="font-semibold">Sign Up with Facebook</span>
          </button>
          <form
            className="space-y-3 flex flex-col"
            onSubmit={e => handleSubmit(e)}
          >
            <input
              type="text"
              id="name"
              value={data.name}
              autoComplete="off"
              placeholder="Full Name"
              className="py-2 px-6 shadow-md rounded-full border-gray-100 border"
              onChange={e => onInputChange(e)}
            />
            <input
              type="text"
              id="email"
              value={data.email}
              autoComplete="off"
              placeholder="Email Address"
              className="py-2 px-6 shadow-md rounded-full border-gray-100 border"
              onChange={e => onInputChange(e)}
            />
            <input
              type="password"
              id="password"
              value={data.password}
              autoComplete="off"
              placeholder="Password"
              className="py-2 px-6 shadow-md rounded-full border-gray-100 border"
              onChange={e => onInputChange(e)}
            />
            <button
              className="bg-primary rounded-lg text-white py-2 font-semibold"
              onClick={e => handleSubmit(e)}
            >
              Sign Up
            </button>
          </form>
        </AuthContent>

        <AuthCart />
      </AuthBody>
    </AuthContainer>
  )
}
