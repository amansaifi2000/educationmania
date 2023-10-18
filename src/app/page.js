
import Header from "./components/Header/header"
import DescriptionCard from "./components/Header/description/description"
import Contact from "./components/contact/contact"
import Form from "./components/Form/Form"
import Footer from "./components/Footer/Footer"
import SocialMediaLinks from "./SocialMedia/social"
// import CarouselComponent from "./Carousel/carousel"


export default function Home() {
  return (
   <div>
    <Header/>
    <DescriptionCard/>
    <Contact/>
    <SocialMediaLinks/>
    {/* <Carousel/> */}
    <Form/>
    <Footer/>

   </div>
   
  )
}
