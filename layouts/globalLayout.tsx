import { ReactNode } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import SideBar from "@/components/sidebar"

export default function GlobalLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <section style={{display: "flex"}} >
      {/* <SideBar/> */}
      <div className='bg-sky-500/75 min-h-screen w-72'>
        Dene
      </div>

      <div className="m-3 text-xl text-gray-900 font-semibold">
        <Header></Header>
       {children}
        <Footer></Footer>
      </div>
    </section>
  )
}
