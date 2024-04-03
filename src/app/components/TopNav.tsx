import Image from 'next/image'
import logo from "../assets/logo.png"
import menu from "../assets/menu.png"

const TopNav = () => {
  return (
    <div className="w-full flex justify-between bg-gray-300/50 h-36 absolute left-0 top-0 z-10">
      <div className="m-8">
        <Image src={logo} alt="Logo" className="h-20 w-20"/>
      </div>
      <div className="m-8">
        <Image src={menu} alt="Menu" className="h-20 w-20"/>
      </div>
    </div>
  )
}

export default TopNav