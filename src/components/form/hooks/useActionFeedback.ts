import { useEffect } from "react"
import { ActionState } from "../utils/toActionState"

type useActionFeedBackOptions={
 onSuccess?:()=>void;
 onFailure?:()=>void;
}

export const useActionFeedback=(actionState:ActionState,options:useActionFeedBackOptions)=>{
    useEffect(()=>{
        if(actionState.status=="SUCCESS") {
            options?.onSuccess?.();
        }
        if(actionState?.status=='ERROR'){
            options?.onFailure?.();
        }
    },[actionState,options])
}