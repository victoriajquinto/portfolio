const Contact = () => {
  return (
    <div className="bg-white h-full sm:min-h-[300px] w-screen relative p-4 overflow-hidden font-lato text-brown">
      <div className="sm:absolute sm:inset-y-0 sm:left-1/4 sm:transform sm:-translate-x-1/2 sm:w-0.5 line-dark-to-light"></div>
      <div className="sm:relative text-center sm:left-1/4 sm:transform sm:-translate-x-1/2 text-xl sm:text-5xl font-bold pl-10 py-10">DON'T BE A STRANGER</div>
      <div className="sm:flex sm:justify-center">
        <div className="sm:w-[25%]"></div>
        <div className="sm:w-[70%] sm:left-3/4">
          <a
            href="mailto:victoriajquinto@gmail.com"
            className="text-center sm:text-left text-xl sm:text-4xl px-4">
            shoot me an email! ↗</a>
          <div className="pt-10 pb-5 text-center sm:text-left text-xl sm:text-4xl  px-4">
            feeling shy? follow me on:
          </div>
          <div className="px-4 text-lg">
            <a href="https://www.linkedin.com/in/victoriaquinto/" target="_blank" rel="noopener noreferrer">linkedin</a>
          </div>
          <div className="px-4 text-lg">
            <a href="https://x.com/victoriajquinto" target="_blank" rel="noopener noreferrer">x</a>
          </div>
          <div className="px-4 text-lg pb-10">
            <a href="https://github.com/victoriajquinto" target="_blank" rel="noopener noreferrer">github</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact;