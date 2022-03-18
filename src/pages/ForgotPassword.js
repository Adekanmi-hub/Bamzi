import React, { useState } from "react"
import { Link } from "react-router-dom"
import AuthStrip from "../components/auth/AuthStrip"
import AuthCart from "../components/auth/AuthCart"
import AuthBody from "../components/auth/AuthBody"
import AuthContent from "../components/auth/AuthContent"
import AuthContainer from "../components/auth/AuthContainer"
import Header from "../components/header"
import axios from "axios"

export default function ForgotPassword() {
  const url = "http://localhost:4000/bamzi/forgot-password"
  const [email, setEmail] = useState("")

  const handleSubmit = e => {
    e.preventDefault()
    axios
      .put(url, {
        email: email,
      })
      .then(res => {
        console.log(res)
      })
    setEmail("")
  }

  return (
    <AuthContainer>
      <Header bg />

      <AuthBody>
        <AuthStrip />
        <AuthContent>
          <Link to="/login" className="p-0 font-normal">
            <p className="text-secondary underline">Remember Password?</p>
          </Link>
          <p className="text-4xl text-primary font-bold leading-6">
            Verification
          </p>
          <p className="text-gray-400 text-sm">
            Input your email and a verification link would be sent to your
            mailbox
          </p>
          <form
            className="flex flex-col space-y-3"
            onSubmit={e => handleSubmit(e)}
          >
            <input
              type="text"
              id="email"
              value={email}
              autoComplete="off"
              placeholder="Email Address"
              className="py-2 px-6 shadow rounded border border-gray-100"
              onChange={e => setEmail(e.target.value)}
            />
            <button
              className="bg-primary rounded text-white py-2 font-semibold"
              onClick={e => handleSubmit(e)}
            >
              Reset
            </button>
          </form>
        </AuthContent>
        <AuthCart />
      </AuthBody>
    </AuthContainer>
  )
}
