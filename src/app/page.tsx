/**
 * Welcome to Home Page
 * All Import Needed
 * Component
 * Picture
 * Next élement
 */

import Nav from './component/Navbar';
import Footer from './component/Footer';
import NeonButton from "./component/Button";
import LinkButton from './component/LinkButton';
import Image from "next/image";
import Face from '../../public/my_face.jpg';
import Arrow from './component/Arrow';


/**
 * Export Home Page
 * Structure : 
 * main 
 * Nav 
 * Title
 * Subtitle
 * Two Button
 * LinkButton component return all link needed ( Github, Gitlab, Linkedin )
 * Arrow For return on top page
 * Footer contain Copyright
 * @returns Page
 */
export default function Page() {
  return (
    <main className=" flex flex-col  bg-background-lin_dev min-h-screen min-w-full bg-cover">
      <div>
        <Nav/>
      </div>
      
      <div className='text-white flex w-full  flex-1  '>


      <div className='w-1/2 mt-24'>
      <Image className="rounded-lg mx-auto"
      src={Face}
      alt="Logo Lin_Dev Néon"
      width={300}
      height={300}
      />
  <br />
  <LinkButton/>
      </div>  

      <div className='mt-24'>
        <h1 className='text-5xl bg-gradient-to-tl from-[#E2E2F0]   to-[#7D86E2] from-30% bg-clip-text text-transparent '> Hello My name is <br /> Dorian Soudan <br />Im</h1>
        <br />
        <h2 className='text-2xl w-1/2'>
        Passionate about technological innovation, Im a versatile full-stack developer and web designer 
        with artificial intelligence skills, ready to turn your ideas into robust, aesthetically pleasing solutions.      
        </h2>

        <div className='flex my-10 gap-8'>  
    <NeonButton props=""/>

    <NeonButton/>
  </div>

      </div>
    </div>

<div>
      <Footer/>

</div>
    


      
  
  </main>
  )
   
}