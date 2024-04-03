import TopNav from './TopNav'
import Image from 'next/image'
import headshot from '../assets/headshot.jpeg'

const Hero = () => {
  return (
  <div className="hero">
  <div className="line-4"></div>
  <div className="ellipse-1"></div>
  <div className="ellipse-2"></div>
  <TopNav />
  <div className="pic">
    <div className="ellipse-4"></div>
    <Image className="headshot" src={headshot} alt="headshot photo"/>
  </div>
  <div className="victoria-quinto">VICTORIA QUINTO</div>
  <div
    className="a-school-psychologist-turned-software-engineer-building-beautiful-products"
  >
    &lt;&gt; a school psychologist
    <br />
    &lt;&gt; turned software engineer
    <br />
    &lt;&gt; building beautiful products
  </div>
  </div>
  )
};

export default Hero;