import React from 'react'
import { ActionState } from './utils/toActionState';
import { useActionFeedback } from './hooks/useActionFeedback';
import { toast } from 'sonner';

type FormProps = {
    action: (payload: FormData) => void;
    actionState: ActionState;
    children: React.ReactNode
}
const Form = ({ action, actionState, children }: FormProps) => {
    // ----- repeatative useActionFeedBack hook -------- //
    useActionFeedback(actionState, {

        onSuccess: ({ actionState }) => {
            if (actionState.message) { toast.success(actionState?.message) }
        },
        onFailure: ({ actionState }) => {
            if (actionState.message) {
                toast.error(actionState?.message)
            }
        }
    });
    return (
        <form action={action} className='flex flex-col space-y-2'>
            {children}
        </form>
    )
}

export default Form