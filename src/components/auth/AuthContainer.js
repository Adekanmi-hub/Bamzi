import React from "react";

const AuthContainer = (props) => {
    return (
        <div className="bg-skyBlue lg:h-screen min-h-screen lg:py-8">
            {props.children}
        </div>
    )
}

export default AuthContainer