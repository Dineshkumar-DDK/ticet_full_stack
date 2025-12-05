"use client";

import clsx from "clsx";
import { LucideAArrowUp, LucideLoaderCircle } from "lucide-react";
import { cloneElement } from "react";
import { useFormStatus } from "react-dom";
import { Button } from "../ui/button";

type SubmitButtonProps = {
  label?: string;
  icon?: React.ReactElement;
  variant?:
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | "link";
  size?: "default" | "sm" | "lg" | "icon";
};

const SubmitButton = ({
  label,
  icon,
  variant = "default",
  size = "default",
}: SubmitButtonProps) => {
  const { pending } = useFormStatus();
  const clonedIcon = cloneElement(icon || <LucideAArrowUp/>,{className:"w-4 h-4"})
  return (
    <Button disabled={pending} type="submit" variant={variant} size={size}>
      {pending && (
        <LucideLoaderCircle
          className={clsx("h-4 w-4 animate-spin", {
            "mr-2": !!label,
          })}
        />
      )}
      {label}
      {pending ? null : icon ? (
        <span
          className={clsx({
            "ml-2": !!label,
          })}
        >
          {clonedIcon}
        </span>
      ) : null}
    </Button>
  );
};

export default SubmitButton ;