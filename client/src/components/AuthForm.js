import { useRef, useState } from 'react'
import { Error } from '../components'

export const AuthForm = ({ onSubmit, onSuccess, submitText }) => {
  const [loading, setLoading] = useState(false)
  const emailRef = useRef()
  const passwordRef = useRef()
  const [errors, setErrors] = useState({
    form: '',
    email: '',
    password: '',
  })

  const clearError = (type) => {
    setErrors((prevState) => ({
      ...prevState,
      form: '',
      [type]: '',
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)

    const response = await onSubmit(
      emailRef.current.value,
      passwordRef.current.value
    )

    if (!response.data.success) {
      setLoading(false)
      return setErrors((prevState) => ({
        ...prevState,
        ...response.data.messages,
      }))
    }

    if (onSuccess) {
      setLoading(false)
      onSuccess(emailRef.current.value, passwordRef.current.value)
    }
  }

  return (
    <form className='mb-3' onSubmit={handleSubmit}>
      {errors.form && <Error message={errors.form} />}
      <div className='mb-3'>
        <input
          type='email'
          ref={emailRef}
          onClick={() => clearError('email')}
          className='form-control'
          aria-describedby='emailHelp'
          placeholder='Email address'
          aria-label='Email address'
        />
        {errors.email && <Error message={errors.email} />}
      </div>

      <div className='mb-3'>
        <input
          type='password'
          ref={passwordRef}
          onClick={() => clearError('password')}
          className='form-control'
          placeholder='Password'
          aria-label='Password'
        />
        {errors.password && <Error message={errors.password} />}
      </div>
      <div className='d-grid'>
        <button type='submit' className='btn btn-primary' disabled={loading}>
          {submitText}
        </button>
      </div>
    </form>
  )
}
