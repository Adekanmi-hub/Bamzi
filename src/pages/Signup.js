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

export default function Signup() {
  const url = "http://localhost:4000/bamzi/signup"
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = e => {
    e.preventDefault()
    axios
      .post(url, {
        name: name,
        email: email,
        password: password,
      })
      .then(res => {
        console.log(res)
      })
    setName("")
    setEmail("")
    setPassword("")
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

          <button className="bg-white rounded-lg text-white py-2 flex justify-center items-center space-x-3 border border-gray-100 shadow-md">
            <FcGoogle size={24} />
            <span className="font-semibold text-black">
              Sign Up with Google
            </span>
          </button>
          <button className="bg-facebook rounded-lg text-white py-2 flex justify-center items-center space-x-3 shadow-md">
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
              value={name}
              autoComplete="off"
              placeholder="Full Name"
              className="py-2 px-6 shadow-md rounded-full border-gray-100 border"
              onChange={e => setName(e.target.value)}
            />
            <input
              type="text"
              id="email"
              value={email}
              autoComplete="off"
              placeholder="Email Address"
              className="py-2 px-6 shadow-md rounded-full border-gray-100 border"
              onChange={e => setEmail(e.target.value)}
            />
            <input
              type="password"
              id="password"
              value={password}
              autoComplete="off"
              placeholder="Password"
              className="py-2 px-6 shadow-md rounded-full border-gray-100 border"
              onChange={e => setPassword(e.target.value)}
            />
            <button
              className="bg-primary rounded-lg text-white py-2 font-semibold shadow-md"
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
