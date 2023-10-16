
import Header from "./components/Header/header"
import DescriptionCard from "./components/Header/description/description"
import Contact from "./components/contact/contact"
import Form from "./components/Form/Form"
import Footer from "./components/Footer/Footer"


export default function Home() {
  return (
   <div>
    <Header/>
    <DescriptionCard/>
    <Contact/>
    <Form/>
    <Footer/>
   </div>
   
  )
}
