import Nav from '../component/Navbar';
import Footer from '../component/Footer';
import Card from '../component/Card'
import Arrow from '../component/Arrow';



export default function Page() {
  return (
    <div className="bg-background-lin_dev h-screen w-full bg-cover">

      <Nav/>
<div className='flex gap-5'>
        <Card/>

      <Card/>

</div>
      
      <Arrow/>

      <Footer/>

    </div>
  );
   
}