import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"
import { Container } from "@chakra-ui/react"
import Footer from "../components/Footer"
export default function RootLayout() {
  return (
    <div>
       
       <Navbar />
       <Container  maxW='container.xl'>
          <Outlet />
       </Container>
       <Footer/>
      
     
    </div>
  )
}