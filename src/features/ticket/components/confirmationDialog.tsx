import { ActionState } from '@/components/form/utils/toActionState';
import React, { cloneElement, useState,useActionState } from 'react'

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  
} from "@/components/ui/alert-dialog"
import { Button } from '@/components/ui/button';
import SubmitButton from '@/components/form/submitButton';
import Form from '@/components/form/form';
import { EMPTY_ACTION_STATE } from '@/components/form/utils/toActionState'

type ConfirmDialogueProps = {
  title?: string;
  description?: string;
  trigger: React.ReactElement;
  action: () => Promise<void>;
}
type ClickableElement = React.ReactElement<
  React.HTMLAttributes<HTMLElement>
>;
const useConfirmationDialogue = ({
  title = "Are you absolutely sure?",
  description = "This action cannot be undone. Make sure to understand the consequences. ",
  trigger, action }: ConfirmDialogueProps) => {
  const [isOpen,setIsOpen] =useState(false);

  const deleteButton = cloneElement(trigger as ClickableElement,{onClick:()=>setIsOpen((prev)=>!prev)})
  
  const [actionState,formAction] = useActionState(action,EMPTY_ACTION_STATE)
  const handleSuccess =()=>{
    setIsOpen(false);
  }
  
  const deleteDialogue = <AlertDialog open={isOpen} onOpenChange={setIsOpen}>
    <AlertDialogContent>
      <AlertDialogHeader>
        <AlertDialogTitle>{title}</AlertDialogTitle>
        <AlertDialogDescription>
          {description}
        </AlertDialogDescription>
      </AlertDialogHeader>
      <AlertDialogFooter>
        <AlertDialogCancel>Cancel</AlertDialogCancel>
        <AlertDialogAction asChild>
          <Form action={formAction} actionState={actionState} onSuccess={handleSuccess}>
             <SubmitButton label = "Confirm"/>
          </Form>
        </AlertDialogAction>
      </AlertDialogFooter>
    </AlertDialogContent>
  </AlertDialog>
  return [deleteButton, deleteDialogue];
}

export  {useConfirmationDialogue}