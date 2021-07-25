import { useRef } from 'react'

export const AuthForm = ({ onSubmit, submitText }) => {
  const emailRef = useRef()
  const passwordRef = useRef()

  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit(emailRef.current.value, passwordRef.current.value)
  }

  return (
    <form className='mb-3' onSubmit={handleSubmit}>
      <div className='mb-3'>
        <input
          type='email'
          ref={emailRef}
          className='form-control'
          aria-describedby='emailHelp'
          placeholder='Email address'
          aria-label='Email address'
        />
      </div>

      <div className='mb-3'>
        <input
          type='password'
          ref={passwordRef}
          className='form-control'
          placeholder='Password'
          aria-label='Password'
        />
      </div>
      <div className='d-grid'>
        <button type='submit' className='btn btn-primary'>
          {submitText}
        </button>
      </div>
    </form>
  )
}
