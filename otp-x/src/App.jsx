import { useState } from 'react'
import './App.css'
import OtpInput from './OtpInput'
import InputCursorFollower from './InputCursorFollower'

const OTP_LENGTH = 6

function App() {
  return (
    <>
      <div>Hello, Otp Coders</div>
      {/* <OtpInput inputLength={OTP_LENGTH} /> */}
      <InputCursorFollower />
    </>
  )
}

export default App
