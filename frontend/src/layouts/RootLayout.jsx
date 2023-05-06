import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"
import { Container } from "@chakra-ui/react"

export default function RootLayout() {
  return (
    <div>
       
       <Navbar />
       <Container  maxW='container.xl'>
          <Outlet />
       </Container>
     
    </div>
  )
}