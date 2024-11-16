import Image from 'next/image'
import headshot from '../assets/headshot.jpeg'

const Hero = () => {
  return (
  <div
    className=" bg-[#ffd7c6] h-screen w-screen relative overflow-hidden hero-background"
    id="home"
  >
    <div className="h-20 w-screen flex-col justify-between"></div>
    <div className="fade-in-animation h-full sm:flex ">
      <div className="h-1/2 sm:h-full sm:w-1/2 relative flex-col pt-10 flex sm:justify-center items-center">
        <div className="sm:absolute sm:inset-y-0 sm:left-1/2 sm:transform sm:-translate-x-1/2 sm:w-0.5 line-dark-to-light"></div>
        <Image
          className="rounded-full m-auto w-44 sm:w-96 h-44 sm:h-96 border-16 sm:border-32 border-peach z-10"
          src={headshot}
          alt="headshot photo"
        />
      </div>
      <div className="h:1/2 sm:h-full sm:w-1/2  sm:flex justify-center sm:justify-start sm:items-center ">
        <div className="p-4 sm:p-0 font-lato text-brown text-center sm:text-left text-xl sm:text-4xl">
          <div className="m-auto pb-2 font-semibold sm:text-5xl">VICTORIA QUINTO</div>
          <div>
            &lt;&gt; a school psychologist
            <br />
            &lt;&gt; turned software engineer
            <br />
            &lt;&gt; building useful products
          </div>
          <div className="my-4">
            <a
              href="/resume.pdf"
              download="Victoria_Quinto_Resume.pdf"
              className="bg-peach text-white text-lg py-2 px-4 rounded hover:bg-brown"
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
};

export default Hero;