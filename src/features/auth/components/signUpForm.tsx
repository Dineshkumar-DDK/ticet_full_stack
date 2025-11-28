// import SubmitButton from '@/components/form/submitButton'
import SubmitButton from '@/components/form/submitButton'
import { Input } from '@/components/ui/input'
import React from 'react'

const SignUpForm = () => {
  return (
    <form >
        <Input name='userName' placeholder='User Name'/>
        <Input name='email' placeholder='email' />
        <Input name='password' type="password" placeholder='password'/>
        <Input name='confirmPassword' type='password' placeholder='confirm password' />
        <SubmitButton label='Sign Up' />
    </form>
  )
}

export default SignUpForm