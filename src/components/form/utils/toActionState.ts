import { ZodError } from "zod"

export type ActionState= { message: string,payload:FormData }
export const formErrorToActionState = (error:unknown,formData:FormData):ActionState=>{
  if(error instanceof ZodError){

    return {
        message:error?.issues[0].message,
        payload:formData
    }
  }
  else if(error instanceof Error){
    return {
        message:error.message,
        payload:formData
    }
  }
    return {
    message: " Something went wrong ",
    payload: formData,
  }
}