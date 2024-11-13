const Work = () => {
  return (
    <div className="bg-[#fca986] h-screen w-screen relative flex overflow-hidden">
      <div className="w-1/2 h-full relative">
        <div className="absolute inset-y-0 left-1/2 transform -translate-x-1/2 w-0.5 line-light-to-dark"></div>
        <div className="h-1/2 border-2 border-red-500 flex justify-center items-center">
          <div className="w-[200px] h-[200px] bg-gray-400">

          </div>
        </div>
        <div className="h-1/2 border-2 border-red-500 flex">

        </div>
      </div>
      <div className="w-1/2 h-full relative">
        <div className="absolute inset-y-0 left-1/2 transform -translate-x-1/2 w-0.5 line-dark-to-light"></div>
        <div className="h-1/2 border-2 border-red-500">

        </div>
        <div className="h-1/2 border-2 border-red-500 flex">

        </div>
      </div>
    </div>
  )
}

export default Work;