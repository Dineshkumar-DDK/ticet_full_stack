import React from 'react'
import { ActionState } from './utils/toActionState'
type FieldErrorProps={
    actionState:ActionState,
    name:string
}
const FieldError = ({actionState,name}:FieldErrorProps) => {
    const message = actionState?.fieldErrors[name]?.errors[0]
    if (!message) return null;
    return (
        <span className='text-xs text-red-500'>{message}</span>
    )
}

export default FieldError