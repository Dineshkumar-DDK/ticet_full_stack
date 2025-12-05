'use client'
import { LucideLoaderCircle } from 'lucide-react'
import React, { cloneElement } from 'react'
import { useFormStatus } from 'react-dom'
import { Button } from '@/components/ui/button'
import clsx from 'clsx'


type SubmitButtonProps = {
    label?: string,
    icon?: React.ReactElement

}
const SubmitButton = ({ label, icon }: SubmitButtonProps) => {
    const { pending } = useFormStatus()
    // const pending = true
    return (
        <Button disabled={pending} type='submit'>
            {pending && (<LucideLoaderCircle className={clsx('w=4 h-4 animate-spin', { 'mr-2': !!label })} />)}
            {label}
            {pending ? null : icon ? (
                <span className={clsx({ "ml-2": !!label })}>
                    {cloneElement(icon, { className: 'h-4 w-4' })}
                </span>
            ) : null}

        </Button>
    )
}

export default SubmitButton