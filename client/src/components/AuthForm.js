import { useRef, useState } from 'react'

export const AuthForm = ({ onSubmit, onSuccess, submitText }) => {
  const emailRef = useRef()
  const passwordRef = useRef()
  const [errors, setErrors] = useState({
    form: '',
    email: '',
    password: '',
  })

  const handleSubmit = async (e) => {
    e.preventDefault()

    const response = await onSubmit(
      emailRef.current.value,
      passwordRef.current.value
    )

    if (!response.data.success) {
      return setErrors((prevState) => ({
        ...prevState,
        ...response.data.messages,
      }))
    }

    return (
      onSuccess && onSuccess(emailRef.current.value, passwordRef.current.value)
    )
  }

  console.log(errors)
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
