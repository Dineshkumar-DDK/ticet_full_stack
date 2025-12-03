import { ZodError } from "zod"
import z from 'zod'

export type ActionState = { message: string, status?: 'SUCCESS' | 'ERROR', payload?: FormData, fieldErrors: Record<string, {errors:string[]}|undefined>, timestamp: number }

export const EMPTY_ACTION_STATE: ActionState = {
  message: "",
  fieldErrors: {},
  timestamp: Date.now()
}

type treeFiedError={
  properties?: Record<string, { errors: string[] }>;
}

export const formErrorToActionState = (error: unknown, formData?: FormData): ActionState => {
  if (error instanceof ZodError) {
    const treeFiedErr =z.treeifyError(error) as treeFiedError;
    // console.log(z.treeifyError(error)?.properties)
    return {
      message: "",
      status: 'ERROR',
      payload: formData,
      fieldErrors: treeFiedErr?.properties ?? {},
      timestamp: Date.now()
    }
  }
  else if (error instanceof Error) {
    return {
      message: error.message,
      status: 'ERROR',
      payload: formData,
      fieldErrors: {},
      timestamp: Date.now()
    }
  }
  return {
    message: " Something went wrong ",
    status: 'ERROR',
    payload: formData,
    fieldErrors: {},
    timestamp: Date.now()
  }
}
export const toActionState = (status: ActionState['status'], message: string,formData:FormData): ActionState => {
  return {
    message,
    status,
    payload:formData,
    fieldErrors: {},
    timestamp: Date.now()
  }
}