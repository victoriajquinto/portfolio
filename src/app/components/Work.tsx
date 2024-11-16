import Image from 'next/image'
import coinsubiohero from '../assets/coinsubiohero.jpeg'
import coinsubiocard from '../assets/coinsubiocard.jpeg'

const Work = () => {
  return (
    <div
      className="bg-[#fca986] h-max w-screen relative sm:flex p-4 overflow-hidden"
      id="work"
    >
      <div className="sm:absolute sm:inset-y-0 sm:left-1/4 sm:transform sm:-translate-x-1/2 sm:w-0.5 line-light-to-dark"></div>
      <div className="sm:absolute sm:inset-y-0 sm:left-3/4 sm:transform sm:-translate-x-1/2 sm:w-0.5 line-dark-to-light"></div>
      <div className="relative h-full p-4">
        <div className="sm:w-[300px] h-full sm:h-[300px] bg-peach/90 z-10 flex justify-center items-center font-lato text-brown p-4 rounded-md">
        <div>
          <div className="text-center sm:text-4xl bg-white rounded-full p-4 mb-2">
          <a href="https://coinsub.io" >coinsub.io 1.0</a>
          </div>
          <div className="text-center">The first iteration of coinsub.io, the landing page of Coinsub Inc.</div>
        </div>
        </div>
      </div>
      <div className="relative w-full h-full px-4 sm:py-4">
        <div className="w-full h-[200px] sm:h-[300px] bg-peach/90 z-10 flex justify-start items-center p-4 overflow-x-auto rounded-md">
          <Image className="h-full w-full object-cover mr-4 rounded-md" src={coinsubiohero} alt="coinsub.io hero section"/>
          <Image className="h-full w-full object-cover rounded-md" src={coinsubiocard} alt="coinsub.io hero card"/>
        </div>
      </div>
    </div>
  )
}

export default Work;