'use client'
import SubmitButton from '@/components/form/submitButton'
import { Input } from '@/components/ui/input'
import React, { useActionState } from 'react'
import { EMPTY_ACTION_STATE } from '@/components/form/utils/toActionState'
import Form from '@/components/form/form'
import FieldError from '@/components/form/fieldError'
import { signIn } from '../actions/signIn'

const SignInForm = () => {
  const [actionState,action] = useActionState(signIn,EMPTY_ACTION_STATE)
  return (
    <Form action={action} actionState={actionState}>
        <Input name='email' placeholder='email' />
        <FieldError actionState={actionState} name='email'/>
        <Input name='password' type="password" placeholder='password'/>
        <FieldError actionState={actionState} name='password'/>
        <SubmitButton label='Sign In' />
    </Form>
  )
}

export default SignInForm