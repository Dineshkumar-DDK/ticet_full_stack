'use client'

import { getCookieByKey, deleteCookieByKey } from "@/action/cookieUtils";
import { useEffect } from "react";
import { toast } from "sonner";

const RedirectToast = () => {
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