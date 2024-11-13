const Work = () => {
  return (
    <div className="bg-[#fca986] h-screen w-screen relative flex overflow-hidden">
      <div className="w-1/2 h-full relative">
        <div className="absolute inset-y-0 left-1/2 transform -translate-x-1/2 w-0.5 line-light-to-dark"></div>
        <div className="relative h-1/2 flex justify-center items-center">
          <div className="w-[150px] sm:w-[300px] h-[150px] sm:h-[300px] bg-peach/90 z-10 flex justify-center items-center font-lato text-brown">
            coinsub.io 1.0
          </div>
        </div>
        <div className="relative h-1/2  flex justify-center items-center">
          <div className="absolute sm:left-[15%] w-full h-[150px] sm:h-[300px] bg-peach/90 flex justify-evenly items-center font-lato text-brown z-10">
            <div className="bg-white h-[80%] w-[300px]">new project photo here</div>
            <div className="hidden sm:block bg-white h-[80%] w-[300px]">second new project photo here</div>
          </div>
        </div>
      </div>
      <div className="relative w-1/2 h-full">
        <div className="absolute inset-y-0 left-1/2 transform -translate-x-1/2 w-0.5 line-dark-to-light"></div>
        <div className="relative h-1/2 flex justify-center items-center">
          <div className="relative sm:right-[15%] w-full h-[150px] sm:h-[300px] bg-peach/90 flex justify-evenly items-center gap-4 font-lato text-brown z-10">
            <div className="bg-white h-[80%] w-[300px]">coinsub photo here</div>
            <div className="hidden sm:block bg-white h-[80%] w-[300px]">second coinsub photo here</div>
          </div>
        </div>
        <div className="relative h-1/2 flex justify-center items-center">
          <div className="w-[150px] sm:w-[300px] h-[150px] sm:h-[300px] bg-peach/90 flex justify-center items-center font-lato text-brown z-10">
            coming soon!
          </div>
        </div>
      </div>
    </div>
  )
}

export default Work;