import Nav from '../component/Navbar';
import Footer from '../component/Footer';
import ContactForm from '../component/ContactForm';
import Arrow from '../component/Arrow';


export default function Page() {
  return (
    <div className="bg-background-lin_dev h-screen w-full bg-cover">
      <Nav/>

      <ContactForm/>

      <Arrow/>

      <Footer/>
    </div>
  );
   
}