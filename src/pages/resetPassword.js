import React from "react"
import AuthStrip from "../components/auth/AuthStrip"
import AuthCart from "../components/auth/AuthCart"
import AuthBody from "../components/auth/AuthBody"
import AuthContent from "../components/auth/AuthContent"
import AuthContainer from "../components/auth/AuthContainer"
import Header from "../components/header"

export default function ResetPassword() {
  return (
    <AuthContainer>
      <Header pryNav="auth" bg />

      <AuthBody>
        <AuthStrip />

        <AuthContent>
          <p className="text-4xl text-primary font-bold leading-6">
            Reset Password
          </p>
          <p className="text-sm text-primary font-semibold">Email@gmail.com</p>
          <input
            type="text"
            name="password"
            id=""
            autoComplete="off"
            placeholder="New Password"
            className="py-2 px-6 shadow rounded border-gray-100 border"
          />
          <input
            type="text"
            name="repeat"
            id=""
            autoComplete="off"
            placeholder="Repeat Password"
            className="py-2 px-6 shadow rounded border border-gray-100"
          />
          <button className="bg-primary rounded text-white py-2">Reset</button>
        </AuthContent>

        <AuthCart />
      </AuthBody>
    </AuthContainer>
  )
}
