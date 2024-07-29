import Nav from './component/Navbar';
import Footer from './component/Footer';
import NeonButton from "./component/Button";
import LinkButton from './component/LinkButton'

export default function Page() {
  return (
  <div>

    <div>
      <Nav/>

      <div>
        <h1>INSERT PICTURE</h1>
      </div>

    </div>

    <div>
      <h1> Hello My name is Dorian Soudan Im</h1>
    </div>

    <div>
      <h2>
      Passionate about technological innovation, Im a versatile full-stack developer and web designer 
      with artificial intelligence skills, ready to turn your ideas into robust, aesthetically pleasing solutions.      
      </h2>
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