import React, { useEffect, useRef, useState } from 'react'

const OtpInput = ({ inputLength }) => {
  const inputRef = useRef([])
  const [inputData, setInputData] = useState(Array(inputLength).fill(''))

  useEffect(() => {
    inputRef?.current[0]?.focus()
  }, [])

  const handleInputChange = (e, index) => {
    const value = e.target.value

    if (!/^\d?$/.test(value)) return // Allow only digits

    const updatedInput = [...inputData]
    updatedInput[index] = value
    setInputData(updatedInput)

    // Move to next input if current one is filled
    if (value && index < inputLength - 1) {
      inputRef?.current[index + 1]?.focus()
    }

    if(value === '' && index > 0) {
        inputRef?.current[index - 1]?.focus()
    }
  }

  const handleBack = (e, index) => {
    if (e.key === 'Backspace') {
      if (e.target.value === '' && index > 0) {
        inputRef?.current[index - 1]?.focus()
      }
    }
  }

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px' }}>
      {Array(inputLength).fill(0).map((_, index) => (
        <input
          key={index}
          type="text"
          maxLength={1}
          value={inputData[index]}
          ref={(el) => inputRef.current[index] = el}
          onChange={(e) => handleInputChange(e, index)}
          onKeyDown={(e) => handleBack(e, index)}
          style={{ width: '32px', height: '40px', textAlign: 'center', fontSize: '18px' }}
        />
      ))}
    </div>
  )
}

export default OtpInput