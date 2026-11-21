import Image from "next/image";
import Hero from "./components/Hero";
import OurStory from "./components/Ourstory";
import WeddingDetails from "./components/WeddingDetails";
import Gallery from "./components/Gallery";
 import Venue from "./components/Venue/Venue";
import RSVP from "./components/RSVP/RSVP";
import Footer from "./components/Footer";
import SectionNavigator from "./components/SectionNavigator/SectionNavigator";
import InvitationOpening from "./components/InvitationOpening/InvitationOpening";
export default function Home() {
  return (
  
     <main>
      <InvitationOpening />

     
       <Hero />
      <OurStory />
        <WeddingDetails />
            {/* <Gallery /> */}
      <Venue />
      <RSVP /> 
      <Footer />
       <SectionNavigator />
    
    </main>
  );

}
