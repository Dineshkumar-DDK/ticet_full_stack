import { LucideMessageSquareWarning } from "lucide-react";
import { cloneElement } from "react";

type PlaceHolderProps = {
    title: string;
    icon?: React.ReactElement<{ className?: string }>;
    button?: React.ReactElement<{ className?: string }>;
}


const PlaceHolder = ({ title, icon = <LucideMessageSquareWarning />, button = <div/> }: PlaceHolderProps) => {
    return <div className="flex flex-col flex-1 items-center justify-center self-center space-y-2">
        {cloneElement(icon, { className: 'w-16 h-16' })}
        <h2 className="text-lg text-center">{title}</h2>
        {cloneElement(button,{className:'h-10'})}
    </div>
}
export { PlaceHolder };