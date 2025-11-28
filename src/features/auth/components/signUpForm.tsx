'use client'
import SubmitButton from '@/components/form/submitButton'
import { Input } from '@/components/ui/input'
import React, { useActionState } from 'react'
import { signUp } from '../actions/signUp'
import { EMPTY_ACTION_STATE } from '@/components/form/utils/toActionState'
import Form from '@/components/form/form'

const SignUpForm = () => {
  const [actionState,action] = useActionState(signUp,EMPTY_ACTION_STATE)
  return (
    <Form action={action} actionState={actionState}>
        <Input name='userName' placeholder='User Name'/>
        <Input name='email' placeholder='email' />
        <Input name='password' type="password" placeholder='password'/>
        <Input name='confirmPassword' type='password' placeholder='confirm password' />
        <SubmitButton label='Sign Up' />
    </Form>
  )
}

export default SignUpForm