import Nav from '../component/Navbar';
import Footer from '../component/Footer';
import Card from '../component/Card'


export default function Page() {
  return (
    <div className="bg-background-lin_dev h-screen w-full bg-cover">

      <Nav/>

      <Card/>

      <Card/>
      
      <Footer/>

    </div>
  );
   
}