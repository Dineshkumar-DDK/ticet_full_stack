import { LucideMessageSquareWarning } from "lucide-react";
import { cloneElement } from "react";

type PlaceHolderProps = {
    title: string;
    icon?: React.ReactElement;
    button?: React.ReactNode;
}

const PlaceHolder = ({ title, icon = <LucideMessageSquareWarning />, button = <div className='h-10'/> }: PlaceHolderProps) => {
    return <div className="flex flex-col flex-1 items-center justify-center self-center space-y-2">
        {cloneElement(icon, { className: 'w-16 h-16' })}
        <h2 className="text-lg text-center">{title}</h2>
        {button}
    </div>
}
export { PlaceHolder };