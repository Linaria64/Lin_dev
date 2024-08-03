import Nav from './component/Navbar';
import Footer from './component/Footer';
import NeonButton from "./component/Button";
import LinkButton from './component/LinkButton';
import Image from "next/image";
import Face from '../../public/laptop.jpg';



export default function Page() {
  return (
  <div className="bg-background-lin_dev h-screen w-full bg-cover">
    <div>
      <Nav/>
    </div>

    <div className='text-white flex h-2/4 w-full'>
      <div className='w-full'>
      <Image className="rounded-lg"
      src={Face}
      alt="Logo Lin_Dev Néon"
      width={300}
      height={300}
      />
      </div>  

      <div>
        <h1 className='text-5xl bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent'> Hello My name is Dorian Soudan Im</h1>
        <br />
        <h2 className='text-lg'>
        Passionate about technological innovation, Im a versatile full-stack developer and web designer 
        with artificial intelligence skills, ready to turn your ideas into robust, aesthetically pleasing solutions.      
        </h2>
      </div>
    </div>

   
  
    <NeonButton/>

    <NeonButton/>

    <LinkButton/>

    <h2>Insert SVG arrow here</h2>

    <div>
      <Footer/>
    </div>
  </div>
  )
   
}