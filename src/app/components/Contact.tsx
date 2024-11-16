const Contact = () => {
  return (
    <div
      className="bg-white h-full sm:min-h-[300px] w-screen relative p-4 overflow-hidden font-lato text-brown"
      id="contact"
    >
      <div className="sm:absolute sm:inset-y-0 sm:left-1/4 sm:transform sm:-translate-x-1/2 sm:w-0.5 line-dark-to-light"></div>
      <div className="sm:flex sm:justify-center">
        <div className="sm:w-[25%]"></div>
        <div className="sm:w-[70%] sm:left-3/4">
          <div className="sm:relative text-center sm:text-left  text-xl sm:text-5xl font-bold py-10">DON'T BE A STRANGER</div>

            <div className="group text-xl sm:text-4xl">
              <a
                href="mailto:victoriajquinto@gmail.com"
                className="sm:text-left text-xl sm:text-4xl">shoot me an email!</a>
              <a
                href="mailto:victoriajquinto@gmail.com"
                className="group-hover:animate-bounce inline-block text-center sm:text-left text-xl sm:text-4xl"
              >↗</a>
            </div>
          <div className="pt-10 pb-5 sm:text-left text-xl sm:text-4xl">
            feeling shy? follow me on:
          </div>
          <div className="text-lg bg-white rounded-full w-fit px-4 py-2 mb-2 -ml-4 hover:bg-peach/80 hover:animate-pulse">
            <a href="https://www.linkedin.com/in/victoriaquinto/" target="_blank" rel="noopener noreferrer">linkedin</a>
          </div>
          <div className="text-lg bg-white rounded-full w-fit px-4 py-2 mb-2 -ml-4 hover:bg-peach/80">
            <a href="https://x.com/victoriajquinto" target="_blank" rel="noopener noreferrer">x</a>
          </div>
          <div className="text-lg bg-white rounded-full w-fit px-4 py-2 -ml-4 mb-10 hover:bg-peach/80">
            <a href="https://github.com/victoriajquinto" target="_blank" rel="noopener noreferrer">github</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact;