import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { getAuth } from "@/features/auth/actions/getAuth"
import { User as AuthUser } from 'lucia'


const useAuth = () => {

    const [fetchedUser, setFetchedUser] = useState<AuthUser | null>(null);
    const [isFetched, setIsFetched] = useState<boolean>(false);
    const pathName = usePathname();
    useEffect(() => {
        fetchUser();
        async function fetchUser() {
            const { user } = await getAuth();
            setFetchedUser(user)
            setIsFetched(true);
        }
    }, [pathName])

    return {fetchedUser,isFetched}
}

export { useAuth }