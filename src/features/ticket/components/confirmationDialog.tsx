import { ActionState } from '@/components/form/utils/toActionState';
import React from 'react'

type ConfirmDialogueProps = {
  trigger: React.ReactElement;
  action:()=>Promise<ActionState>;
}
const ConfirmationDialogue = ({trigger,action}:ConfirmDialogueProps) => {
  return (
    <div>{trigger}</div>
  )
}

export default ConfirmationDialogue