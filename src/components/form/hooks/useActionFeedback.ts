import { useEffect, useRef } from "react"
import { ActionState } from "../utils/toActionState"

type OnArgs ={
    actionState:ActionState
}
type useActionFeedBackOptions={
 onSuccess?:(onArgs:OnArgs)=>void;
 onFailure?:(onArgs:OnArgs)=>void;
}

export const useActionFeedback=(actionState:ActionState,options:useActionFeedBackOptions)=>{
    const prevTimeStamp = useRef(actionState.timestamp);
    const isUpdated = prevTimeStamp.current!==actionState.timestamp;
    useEffect(()=>{
        if(isUpdated) return ;
        if(actionState.status=="SUCCESS") {
            options?.onSuccess?.({actionState});
        }
        if(actionState?.status=='ERROR'){
            options?.onFailure?.({actionState});
        }
        prevTimeStamp.current = actionState.timestamp;
    },[isUpdated,actionState,options])
}