import { ActionState } from '@/components/form/utils/toActionState';
import React, { cloneElement, useState } from 'react'

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

  const [isOpen,setIsOpen] =useState(false)
  const deleteButton = cloneElement(trigger as ClickableElement,{onClick:()=>setIsOpen((prev)=>!prev)})
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
          <form action={action}>
            <Button type='submit'>Confirm</Button>
          </form>
        </AlertDialogAction>
      </AlertDialogFooter>
    </AlertDialogContent>
  </AlertDialog>
  return [deleteButton, deleteDialogue];
}

export  {useConfirmationDialogue}