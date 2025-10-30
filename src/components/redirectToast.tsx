'use client'

import { getCookieByKey, deleteCookieByKey } from "@/action/cookieUtils";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { toast } from "sonner";

const RedirectToast = () => {
    // const pathname = usePathname();
    useEffect(() => {
        const showToast = async () => {
            const message = await getCookieByKey('toast');
            if (message) {
                toast.success(message);
                await deleteCookieByKey('toast');
            }
        }

        showToast();
    }, [])

    return null;
}
export { RedirectToast }