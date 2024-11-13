import TopNav from './TopNav'
import Image from 'next/image'
import headshot from '../assets/headshot.jpeg'

const Hero = () => {
  return (
  <div
    className="bg-[#ffd7c6] h-screen w-screen relative overflow-hidden hero-background"
  >
    <TopNav />
    <div className="h-36 w-screen flex-col justify-between"></div>
    <div className="flex h-[calc(100vh-144px)]">
      <div className="w-1/2 relative flex justify-center items-center">
        <div className="absolute inset-y-0 left-1/2 transform -translate-x-1/2 w-0.5 line-dark-to-light"></div>
        <Image
          className="rounded-full w-96 h-96 border-32 border-peach z-10"
          src={headshot}
          alt="headshot photo"
        />
      </div>
      <div className="w-1/2 relative flex justify-start items-center">
        <div className="font-lato text-brown text-4xl">
          <div className="pb-2 font-semibold">VICTORIA QUINTO</div>
          &lt;&gt; a school psychologist
          <br />
          &lt;&gt; turned software engineer
          <br />
          &lt;&gt; building useful products
        </div>
      </div>
    </div>
  </div>
  )
};

export default Hero;