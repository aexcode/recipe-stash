import { useRef } from 'react'

export const AuthForm = ({ onSubmit, submitText }) => {
  const emailRef = useRef()
  const passwordRef = useRef()

  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit(emailRef.current.value, passwordRef.current.value)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type='email'
        ref={emailRef}
        placeholder='Email Address'
        aria-label='Email address'
      />

      <input
        type='password'
        ref={passwordRef}
        placeholder='Password'
        aria-label='Password'
      />

      <input type='submit' value={submitText} />
    </form>
  )
}
