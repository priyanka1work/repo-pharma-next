import Sidebar from "@/components/layout/Sidebar"
import Link from "next/link"



function layout({children}) {
  return (
    <div>
      <aside>
        <h2>

        </h2>
        <nav className="flex flex-col gap-3">
        <Sidebar/>
            
        </nav>
      </aside>
      <main>
        {children}
      </main>
    </div>
  )
}

export default layout
