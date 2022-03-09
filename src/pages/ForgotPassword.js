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
  const url = "http://localhost:3030/bamzi/forgot-password"
  const [data, setData] = useState({
    email: "",
  })

  const handleSubmit = e => {
    e.preventDefault()
    axios
      .put(url, {
        email: data.email,
      })
      .then(res => {
        console.log(res)
      })
    setData({
      email: "",
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
              value={data.email}
              autoComplete="off"
              placeholder="Email Address"
              className="py-2 px-6 shadow rounded border border-gray-100"
              onChange={e => onInputChange(e)}
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
