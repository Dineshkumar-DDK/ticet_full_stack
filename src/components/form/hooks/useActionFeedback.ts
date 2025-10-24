import { useEffect } from "react"
import { ActionState } from "../utils/toActionState"

type useActionFeedBackOptions={
 onSuccess?:({actionState}:{actionState:ActionState})=>void;
 onFailure?:({actionState}:{actionState:ActionState})=>void;
}

export const useActionFeedback=(actionState:ActionState,options:useActionFeedBackOptions)=>{
    useEffect(()=>{
        if(actionState.status=="SUCCESS") {
            options?.onSuccess?.({actionState});
        }
        if(actionState?.status=='ERROR'){
            options?.onFailure?.({actionState});
        }
    },[actionState,options])
}