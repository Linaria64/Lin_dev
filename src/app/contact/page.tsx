import Nav from '../component/Navbar';
import Footer from '../component/Footer';
import ContactForm from '../component/ContactForm';
export default function Page() {
  return (
    <div className="bg-background-lin_dev h-screen w-full bg-cover">
      <Nav/>

      <ContactForm/>

      <Footer/>
    </div>
  );
   
}