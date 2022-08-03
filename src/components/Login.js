
import React, { useState } from 'react'
import { authenticate } from '../utils/authenticate'

export default function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const emailInput = (e) => {
        setEmail(e.target.value)
    }

    const passwordInput = (e) => {
        setPassword(e.target.value)
    }

    const onSubmit = (e) => {
        e.preventDefault()
        // authenticate(email, password)

       
    }

  return (
    <form onSubmit={onSubmit}>
        <input placeholder='Enter Email' value={email} onChange={emailInput}/>
        <input placeholder='Enter Password' value={password} onChange={passwordInput}/>
        <button type='submit'>Submit</button>
    </form>
  )
}
