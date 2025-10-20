import { ZodError } from "zod"
import z from 'zod'

export type ActionState= { message: string,payload?:FormData,fieldErrors:Record<string , string[] | undefined> }
export const formErrorToActionState = (error:unknown,formData:FormData):ActionState=>{
  if(error instanceof ZodError){
    // console.log(z.treeifyError(error)?.properties)
    return {
        message:"",
        payload:formData,
        fieldErrors:z.treeifyError(error)?.properties
    }
  }
  else if(error instanceof Error){
    return {
        message:error.message,
        payload:formData,
        fieldErrors:{}
    }
  }
    return {
    message: " Something went wrong ",
    payload: formData,
    fieldErrors:{}
  }
}