import { ReactNode } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function GlobalLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <div>
      <Header></Header>
      {children}
      <Footer></Footer>
    </div>
  )
}
