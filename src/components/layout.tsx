import type { PropsWithChildren } from "react"
import Header from "./header"

const Layout = ({ children }: PropsWithChildren ) => {
  return (
    <div className="bg-gradient-to-br from-background to-muted">
        {/* header */}

        <Header/>

        <main className="min-h-screen container mx-auto px-4 py-8">
            {children}
        </main>
        {/* footer */}
        <footer className="border-t backdrop-blur py-6 supports-[backdrop-filter]:bg-background/60">
            <div className="container mx-auto px-4 text-gray-400">
                <div className="flex items-center justify-center gap-2">
                  
                    <div>
                      Designed and Developed by 
                    </div>
                  
                  <a target="_blank" href="https://twitter.com/sheriffign" rel="noreferrer">
                    <div className="text-sm flex gap-x-2 text-blue-400 font-medium justify-center items-center 
                    outline-none transition-transform duration-400 ease-in-out hover:-translate-y-1 focus:ring-2 focus:ring-white/20 focus:ring-offset-4
                  focus:ring-offset-black hover:cursor-pointer">
                      <img src="https://pbs.twimg.com/profile_images/1757030393558061056/GVDD2GeM_400x400.jpg" alt="avatar" className="h-5 w-5 rounded-full" />
                      Himanshu
                    </div>
                  </a>
                    

                </div>
            </div>
        </footer>
    </div>
  )
}

export default Layout