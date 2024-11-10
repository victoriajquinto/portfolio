import TopNav from './TopNav'
import Image from 'next/image'
import headshot from '../assets/headshot.jpeg'

const Hero = () => {
  return (
  <div className="bg-[#ffd7c6] h-[1024px] w-screen relative">
    <div
      className="border-t-2 w-[1039.02px] h-0 absolute left-[368px] top-[1039px] origin-top-left rotate-[-90deg]"
      style={{borderImage: "linear-gradient(180deg, rgba(136, 100, 95, 1) 0%, rgba(226, 142, 110, 1) 100%) 1",}}
    ></div>
    <div
      className="absolute rounded-full w-[1317px] h-[1040px] left-[790px] top-[-469px]"
      style={{
        background: "radial-gradient(closest-side, rgba(251, 154, 113, 1) 0%, rgba(251, 154, 113, 0) 100%)",}}
    ></div>
    <div
      className="absolute rounded-full w-[1317px] h-[1040px] left-[-381px] top-[635px] shadow-md"
      style={{
        background: "radial-gradient(closest-side, rgba(251, 154, 113, 1) 0%, rgba(251, 154, 113, 0) 100%)",
        boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
      }}
    ></div>
    <TopNav />
    <div className="absolute w-[429px] h-[429px] left-[153px] top-[389px]">
      <div className="absolute inset-0 bg-[rgba(251,154,113,0.29)] rounded-full w-full h-full"></div>
      <Image
        className="absolute rounded-full object-cover inset-[6.03%] w-[87.94%] h-[87.94%]"
        src={headshot}
        alt="headshot photo"
      />
    </div>
    <div
      className="absolute text-left font-bold"
      style={{
        color: "#88645f",
        fontFamily: "'Mina-Bold', sans-serif",
        fontSize: "52px",
        left: "666px",
        top: "465px",
        width: "713px",
        height: "91px",
      }}
    >
      VICTORIA QUINTO
    </div>
    <div
      className="absolute text-left font-normal"
      style={{
        color: "var(--hair, #88645f)",
        fontFamily: "'Mina-Regular', sans-serif",
        fontSize: "40px",
        left: "666px",
        top: "555px",
        width: "599px",
        height: "339px",
      }}
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