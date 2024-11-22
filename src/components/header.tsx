import { useTheme } from "@/context/theme-provider"
import { Link } from "react-router-dom"
import { CitySearch } from "./city-search"

const Header = () => {

  const { theme, setTheme } = useTheme()

  const isDark = theme === "dark"

  return (
    <> 
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur py-2 supports-[backdrop-filter]:bg-background/60">
            <div className="container mx-auto flex h-16 items-center justify-between px-4">
                <Link to={"/"} className="flex items-center gap-2 dark:bg-neutral-900 bg-slate-100 rounded-full py-1 px-3  border-2">
                    <img src="/cloudy.png" alt="logo" className="lg:h-7 h-5 "/>
                    <h1 className="lg:text-2xl text-lg font-extrabold bg-gradient-to-br from-blue-100 via-blue-500 to-blue-200 bg-clip-text text-transparent tracking-tighter">
                        CLIME
                    </h1>
                </Link>

                <div className="flex items-center lg:gap-4 gap-2">
                    {/* search */}

                    <CitySearch/>

                    {/* theme-toggle */}
                    <div className={`flex items-center cursor-pointer transition-transform duration-500 ${isDark ? "rotate-180" : "rotate-0"}`} onClick={() => setTheme(isDark ? "light" : "dark")}> 
                        {isDark ? <img src="/sun.png" alt="sun" className="h-full w-7"/> : <img src="/moon.png" alt="moon" className="h-full w-7"/>}
                    </div>
                </div>
            </div>
        </header>
    </>
  )
}

export default Header