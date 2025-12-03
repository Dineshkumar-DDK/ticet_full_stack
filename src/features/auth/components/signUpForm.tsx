'use client'
import SubmitButton from '@/components/form/submitButton'
import { Input } from '@/components/ui/input'
import React, { useActionState } from 'react'
import { signUp } from '../actions/signUp'
import { EMPTY_ACTION_STATE } from '@/components/form/utils/toActionState'
import Form from '@/components/form/form'
import FieldError from '@/components/form/fieldError'

const SignUpForm = () => {
  const [actionState,action] = useActionState(signUp,EMPTY_ACTION_STATE)
  return (
    <Form action={action} actionState={actionState}>
        <Input name='username' placeholder='User Name'/>
        <FieldError actionState={actionState} name='username'/>
        <Input name='email' placeholder='email' />
        <FieldError actionState={actionState} name='email'/>
        <Input name='password' type="password" placeholder='password'/>
        <FieldError actionState={actionState} name='password'/>
        <Input name='confirmPassword' type='password' placeholder='confirm password' />
        <FieldError actionState={actionState} name='confirmPassword'/>
        <SubmitButton label='Sign Up' />
    </Form>
  )
}

export default SignUpForm