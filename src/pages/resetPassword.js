import React, { useEffect, useState } from "react"
import AuthStrip from "../components/auth/AuthStrip"
import AuthCart from "../components/auth/AuthCart"
import AuthBody from "../components/auth/AuthBody"
import AuthContent from "../components/auth/AuthContent"
import AuthContainer from "../components/auth/AuthContainer"
import Header from "../components/header"
import axios from "axios"
import { useParams } from "react-router-dom"
import * as yup from "yup"
import { Formik } from "formik"

export default function ResetPassword() {
  const [email, setEmail] = useState("")
  const { token } = useParams()

  const schema = yup.object({
    password: yup
      .string()
      .required("Password is required")
      .min(8, "Password must be atleast 8 characters."),
    repeatPassword: yup
      .string()
      .required("Repeat Password is required")
      .oneOf([yup.ref("password")], "Password must match"),
  })

  useEffect(() => {
    const fetchData = () => {
      axios
        .get(`http://localhost:4000/bamzi/reset-password/${token}`)
        .then(response => {
          const data = response.data.response.email
          setEmail(data)
        })
    }

    fetchData()
  }, [])

  return (
    <AuthContainer>
      <Header pryNav="auth" bg />

      <AuthBody>
        <AuthStrip />

        <AuthContent>
          <p className="text-4xl text-primary font-bold leading-6">
            Reset Password
          </p>
          <p className="text-sm text-primary font-semibold">{email}</p>

          <Formik
            initialValues={{
              password: "",
              repeatPassword: "",
            }}
            validationSchema={schema}
            onSubmit={values => {
              axios
                .put(`http://localhost:4000/bamzi/reset-password/${token}`, {
                  password: values.repeatPassword,
                })
                .then(res => {
                  console.log(res)
                  return res
                })
            }}
          >
            {props => (
              <div className="flex flex-col space-y-2.5">
                <div className="flex flex-col">
                  <input
                    type="password"
                    id="password"
                    value={props.values.password}
                    autoComplete="off"
                    placeholder="New Password"
                    className="py-2 px-6 shadow rounded border-gray-100 border"
                    onChange={props.handleChange}
                    onBlur={props.handleBlur}
                  />
                  {props.touched.password && props.errors.password ? (
                    <p className="text-xs text-red-400">
                      {props.errors.password}
                    </p>
                  ) : null}
                </div>
                <div className="flex flex-col">
                  <input
                    type="password"
                    id="repeatPassword"
                    value={props.values.repeatPassword}
                    autoComplete="off"
                    placeholder="Repeat Password"
                    className="py-2 px-6 shadow rounded border border-gray-100"
                    onChange={props.handleChange}
                    onBlur={props.handleBlur}
                  />
                  {props.touched.repeatPassword &&
                  props.errors.repeatPassword ? (
                    <p className="text-xs text-red-400">
                      {props.errors.repeatPassword}
                    </p>
                  ) : null}
                </div>

                <button
                  className="bg-primary rounded text-white py-2"
                  type="submit"
                  onClick={props.handleSubmit}
                  disabled={props.dirty && props.isValid ? false : true}
                >
                  Reset
                </button>
              </div>
            )}
          </Formik>
        </AuthContent>

        <AuthCart />
      </AuthBody>
    </AuthContainer>
  )
}
