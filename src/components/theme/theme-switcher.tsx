'use client'
import { useTheme } from "next-themes"
import { Button } from "../ui/button"
import { LucideMoon, LucideSun } from "lucide-react"

const ThemeSwitcher = () => {
    const { theme, setTheme } = useTheme()
    return (
        <div>
            <Button
                variant='outline'
                size='icon'
                onClick={() => {setTheme(theme === "light" ? "dark" : "light")}}

            >
                <LucideSun 
                 className="h-4 w-4 scale-100 rotate-0 transition-all dark:-rotate-90 dark:scale-0"
                />
                <LucideMoon
                className=" absolute h-4 w-4 scale-0 rotate-90 transition-transform dark:scale-100 dark:rotate-0"
                />
            </Button>
            
        </div>
    )
}

export { ThemeSwitcher }