import { useEffect } from "react"
import { ActionState } from "../utils/toActionState"

type OnArgs ={
    actionState:ActionState
}
type useActionFeedBackOptions={
 onSuccess?:(onArgs:OnArgs)=>void;
 onFailure?:(onArgs:OnArgs)=>void;
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