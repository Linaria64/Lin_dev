import Nav from '../component/Navbar';
import Footer from '../component/Footer';
import SubCard from '../component/SubCard'
import Arrow from '../component/Arrow';


export default function Page() {
  return (
  <div className="bg-background-lin_dev h-screen w-full bg-cover">
      <Nav/>

   
      <SubCard/>

  
      <SubCard/>
 
 
      <SubCard/>

      <Arrow/>

      <Footer/>

  </div>
  );
   
}