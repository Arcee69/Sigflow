import React, { useState } from 'react'
import { Form, Formik} from "formik"
import { useLocation, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import PasswordField from '../../components/InputFields/PasswordField'

import Github from "../../assets/icons/github.svg"
import Google from "../../assets/icons/google.svg"
import Key from "../../assets/icons/key.svg"
import { loginUser } from '../../features/auth/loginSlice'


const Login = () => {
    const navigate = useNavigate()
    const location = useLocation()
    
    const userLoggedIn  = useSelector(state => state.userLogin)
    const { loading } = userLoggedIn
    
    const dispatch = useDispatch()
    
    const from = location.state?.from?.pathname || "/dashboard";

    const submitForm = (values) => {

        const data = {
          email: values?.email,
          password: values?.password
        }
        dispatch(loginUser(data))
        .then(() => {
          navigate(from , { replace: true });
        })
    
      };
    
    


  return (
    <div className='mb-5 '>
        <div className='w-full md:w-[480px] h-[580px] rounded-lg border-2 flex flex-col border-solid border-[#fafafa] p-8 '>
            <div className='flex flex-col justify-center gap-1 items-center'>
                <p className="text-xl font-medium text-[#101828]">Welcome back!</p>
                <p className='text-[#828282] text-sm'>Sign in to access your account</p>
            </div>
            <div className="h-[300px] mt-5">
                <Formik
                initialValues={{
                    email: "",
                    password: ""
                }}
                //   validationSchema={formValidationSchema}
                onSubmit={(values) => {
                    window.scrollTo(0, 0)
                    console.log(values, "often")
                    submitForm(values)
                }}
                >
                {({
                    handleSubmit,
                    handleChange,
                    dirty,
                    isValid,
                    setFieldValue,
                    errors,
                    touched,
                    // setFieldTouched,
                    values,
                }) => (
                <Form onSubmit={handleSubmit} className="flex flex-col lg:items-center">
                    <div className='flex flex-col gap-6 lg:items-center h-[47px]'>
            
                        <div className="flex flex-col ">
                        <label htmlFor='email' className="text-xs font-normal text-[#101828]">Email</label>
                            <input
                                name="email"
                                placeholder="youremail@domain.com"
                                type="text" 
                                value={values.email}
                                onChange={handleChange}
                                className="rounded-lg border-[#D0D5DD] xs:w-full outline-none lg:w-[420px] mt-1.5 h-[51px] border-solid  p-3 border"
                            />
                            {errors.email && touched.email ? (
                            <div className='text-RED-_100'>{errors.email}</div>
                            ) : null}
                        </div>
                        <div className="flex flex-col xs:w-full lg:w-[420px]">
                        <label htmlFor='password' className="text-xs font-normal text-[#101828]">Password</label>
                        <PasswordField 
                            name="password"
                            value={values.password}
                            placeholder="Password"
                            className="border lg:w-[420px] h-[51px] rounded-lg border-[#D0D5DD] mt-1.5"
                            onChange={handleChange}
                        />
                        <p className="text-primary text-left text-xs mt-1.5 font-medium cursor-pointer">Forgot Password?</p>
                        {errors.password && touched.password ? (
                            <div className='text-RED-_100'>{errors.password}</div>
                            ) : null}
                        </div>

                        <button 
                            className= {`${loading ? "bg-[#e8e9eb] text-[#fff]" : " bg-primary text-[#fff] "}  mt-5 xs:w-full lg:w-[420px]  rounded-lg p-3 cursor-pointer text-center w-full h-[54px] text-sm font-medium`}
                            type="submit"
                        >
                            {loading ?  "Please wait..."  :  "Sign In"}
                        </button>
                    
                    </div>
                    

                </Form>
            )}
                </Formik>
            </div>
            <div className='flex  h-[50px] flex-col gap-3'>
                <p className='text-base text-[#828282] text-center'>OR</p>
                <div className='flex gap-5 justify-center items-center'>
                    <button className='border border-solid border-[#D0D5DD] gap-2 p-3.5 flex items-center h-[40px] rounded-lg'>
                        <p className='text-[13px] text-BLACK-_200'>Sign in with Github</p>
                        <img src={Github} alt="github"/>
                    </button>
                    <button className='border border-solid border-[#D0D5DD] gap-2  p-3.5 flex items-center h-[40px] rounded-lg'>
                        <p className='text-[13px] text-BLACK-_200'>Sign in with Google</p>
                        <img src={Google} alt="github"/>
                    </button>
                </div>
                <div className='flex justify-center items-center'>
                    <button className='border border-solid border-[#D0D5DD] gap-2  p-3.5 flex items-center h-[40px] rounded-lg'>
                        <p className='text-[13px] text-BLACK-_200'>Sign in with SSO</p>
                        <img src={Key} alt="github"/>
                    </button>
                </div>
            </div>

        </div>
        <p className='flex text-xs text-[#828282] justify-center mt-2.5'>Don't have an account? <span className='text-primary ml-1'>Sign up</span></p>
    
    </div>
  )
}

export default Login