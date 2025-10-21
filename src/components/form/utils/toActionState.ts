import { ZodError } from "zod"
import z from 'zod'
export const EMPTY_ACTION_STATE:ActionState ={
 message:"",
 fieldErrors:{}
}
export type ActionState= { message: string,status?:'SUCCESS'|'ERROR',payload?:FormData,fieldErrors:Record<string , string[] | undefined> }
export const formErrorToActionState = (error:unknown,formData:FormData):ActionState=>{
  if(error instanceof ZodError){
    // console.log(z.treeifyError(error)?.properties)
    return {
        message:"",
        status:'ERROR',
        payload:formData,
        fieldErrors:z.treeifyError(error)?.properties
    }
  }
  else if(error instanceof Error){
    return {
         
        message:error.message,
        status:'ERROR',
        payload:formData,
        fieldErrors:{}
    }
  }
    return {
    message: " Something went wrong ",
    status:'ERROR',
    payload: formData,
    fieldErrors:{}
  }
}
export const toActionState =(status:ActionState['status'],message:string):ActionState=>{
  return {
    message,
    status,
    fieldErrors:{}
  }
}