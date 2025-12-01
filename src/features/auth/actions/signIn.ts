import { ticketsPath } from "@/app/paths";
import { formErrorToActionState,ActionState, toActionState } from "@/components/form/utils/toActionState"
import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";
import z from 'zod'
//2
const signInSchema = z.object({
    email:z.email().min(1,{message:"Required"}).max(191,{message:"should be a proper email format"}),
    password:z.string().min(6,{message:"Required"}).max(191)
})

// 1
export const signIn=async (_actionState:ActionState,formData:FormData)=>{
  try {
    const {email,password} = signInSchema.parse(
        Object.fromEntries(formData)
    );
    const user = prisma.user.findUnique({
        where:{email}
    })
    if(!user){
        return toActionState("ERROR","User not found");
    }
  } catch (error) {
    return formErrorToActionState(error)
  }

  redirect(ticketsPath())
}