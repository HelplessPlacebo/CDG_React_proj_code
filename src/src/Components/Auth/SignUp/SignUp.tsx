import React from "react"
import {SignUpFormRedux} from "./SignUpForm";
import {TShowSnackBar} from "../../../App";

type TSignUpProps={
    ComponentIsSignIn:()=>void
    ShowSnackBar : TShowSnackBar
}
export type TSignUpFormData={
    email:string,
    password : string
    name : string
}

export const SignUp : React.FC<TSignUpProps> = (props) => {
    const handleSubmit = (formData: TSignUpFormData) => {
        props.ShowSnackBar({message: "Account was create. Check your email!",severity:"success",position:{
                vertical:"top",horizontal:"center"
            }})
        console.log(formData)
    }

    return <div   className="SignUpContainer">
        <SignUpFormRedux onSubmit={handleSubmit} ComponentIsSignIn={props.ComponentIsSignIn} />
    </div>
}

