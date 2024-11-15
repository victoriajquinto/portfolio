const About = () => {
  return (
    <div className="about-background h-full sm:min-h-[300px] w-screen relative p-4 overflow-hidden font-lato text-brown"
    id="about">
      <div className="sm:absolute sm:inset-y-0 sm:left-3/4 sm:transform sm:-translate-x-1/2 sm:w-0.5 line-light-to-dark"></div>
      <div className="sm:relative sm:inset-y-0 text-center sm:left-3/4 sm:transform sm:-translate-x-1/2 text-xl sm:text-5xl font-bold py-10">ABOUT ME</div>
      <div className="sm:w-[70%]">
        <div className="text-xl sm:text-4xl text-left pb-10 px-4">I'm Victoria Quinto, a full-stack software engineer aiming to build useful products, particularly for overlooked educators like myself.</div>
        <div className="px-4 text-lg" style={{textAlign: 'justify'}}>
          When I was a school psychologist, I was baffled at how much of time I spent manually typing out multi-page reports. I constantly thought, "There HAS to be a better way." However, tools for educators like me simply do not exist. While I LOVED my job and loved my students, my frustration with report writing drove me to become a software engineer.
          <br />
          <br />
          At my day job, I have the privilege building cutting edge technology enabling crypto subscriptions that work. The ingenuity goes to my boss, the mastermind and CTO at Coinsub. I focus on building fullstack features that improve the API and user experience of our product.
          <br />
          <br />
          At night, I build web tools specifically for school psychologists. I have high ambitions for my current project, and I have lots to learn to bring my ideas to life, so stay tuned!

          Let's connect and explore how my unique skill set can bring value to your projects. Looking forward to engaging with like-minded professionals in the tech community!
          <br />
          <br />
          Other interests:
          <br />
          &lt;&gt; Interior design.
          <br />
          &lt;&gt; Parenting. I’m a mom!
          <br />
          &lt;&gt; Faith and religion.
      </div>
    </div>
  </div>

  )
}

export default About;