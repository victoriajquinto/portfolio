import Image from 'next/image'
import linkedin from '../assets/icons/linkedin.png'
import x from '../assets/icons/x.png'
import github from '../assets/icons/github.png'

const Footer = () => {
  return (
    <div className="bg-[#fca986] p-4 justify-between items-center flex font-lato text-white">
      <div className="text-sm">© 2024 Victoria Quinto. All rights reserved.</div>
      <div className="flex justify-evenly gap-2">
        <a href="https://www.linkedin.com/in/victoriaquinto/" target="_blank" rel="noopener noreferrer">
          <Image className="w-[30px]" src={linkedin} alt="LinkedIn"/>
        </a>
        <a href="https://x.com/victoriajquinto" target="_blank" rel="noopener noreferrer">
          <Image className="w-[30px]" src={x} alt="LinkedIn"/>
        </a>
        <a href="https://github.com/victoriajquinto" target="_blank" rel="noopener noreferrer">
          <Image className="w-[30px]" src={github} alt="LinkedIn"/>
        </a>
      </div>
    </div>
  )
}

export default Footer;