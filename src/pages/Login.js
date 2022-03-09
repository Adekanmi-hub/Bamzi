import React, { useState } from "react"
import { Link } from "react-router-dom"
import { FcGoogle } from "react-icons/fc"
import { FaFacebookSquare } from "react-icons/fa"
import AuthStrip from "../components/auth/AuthStrip"
import AuthCart from "../components/auth/AuthCart"
import AuthBody from "../components/auth/AuthBody"
import AuthContent from "../components/auth/AuthContent"
import AuthContainer from "../components/auth/AuthContainer"
import Header from "../components/header"
import axios from "axios"

export default function Login() {
  const url = "http://localhost:3030/bamzi/signin"
  const [data, setData] = useState({
    email: "",
    password: "",
  })

  const handleSubmit = e => {
    e.preventDefault()
    axios
      .post(url, {
        email: data.email,
        password: data.password,
      })
      .then(res => {
        console.log(res)
      })
    setData({
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
              <button className="py-3 w-full bg-secondary rounded-lg shadow-sm font-semibold">
                Sign In
              </button>
            </Link>
            <Link to="/signup" className="p-0 w-1/2">
              <button className="py-2 w-full bg-gray-200 rounded-r-lg font-semibold">
                Sign Up
              </button>
            </Link>
          </div>

          <button className="bg-white rounded-lg text-white py-2 flex justify-center items-center space-x-3 border border-gray-100 shadow-md">
            <FcGoogle size={24} />
            <span className="font-semibold text-black">
              Sign In with Google
            </span>
          </button>
          <button className="bg-facebook rounded-lg text-white py-2 flex justify-center items-center space-x-3 shadow-md">
            <FaFacebookSquare size={24} />
            <span className="font-semibold">Sign In with Facebook</span>
          </button>
          <form
            className="flex flex-col space-y-3"
            onSubmit={e => handleSubmit(e)}
          >
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
              className="bg-primary rounded-lg text-white py-2 font-semibold shadow-md"
              onClick={e => handleSubmit(e)}
            >
              Login
            </button>
          </form>
          <Link to="/forgot-password" className="p-0 text-center font-normal">
            <span className="text-secondary underline">Forgot Password?</span>
          </Link>
        </AuthContent>

        <AuthCart />
      </AuthBody>
    </AuthContainer>
  )
}
