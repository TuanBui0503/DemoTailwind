import { useState } from 'react'
import { MdMenuOpen } from 'react-icons/md'
import { MdMenu } from 'react-icons/md'
export default function Header() {
    const [isOpen, setIsOpen] = useState(false)
  return (
    <>
      <header className="w-full max-w-[1280px] m-auto">
        <nav className="bg-white text-black p-4 shadow-lg rounded-xl ">
          <div className="flex items-center justify-between ml-auto mr-auto">
            <a href="#" className="text-2xl font-bold">
              Brand
            </a>
            <button className="block text-block cursor-pointer md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <MdMenuOpen className="text-3xl" /> : <MdMenu className="text-3xl"/>}
            </button>
            <ul className={`md:flex md:flex-row transition-all duration-300 ease-in-out md:space-x-6 md:items-center 
            md:static top-16 left-0 w-full bg-[#f0f8ff] md:w-auto md:bg-transparent absolute ${isOpen ? "h-[200px]" : "h-[0px]"}`}>
                <li><a href="#" className={`block ${isOpen ? "" : "max-md:hidden"} transition-all duration-300 ease-in-out px-4 py-2 hover:text-gray-600`}>Home</a></li>
                <li><a href="#" className={`block ${isOpen ? "" : "max-md:hidden"} transition-all duration-300 ease-in-out px-4 py-2 hover:text-gray-600`}>About</a></li>
                <li><a href="#" className={`block ${isOpen ? "" : "max-md:hidden"} transition-all duration-300 ease-in-out px-4 py-2 hover:text-gray-600`}>Services</a></li>
                <li><a href="#" className={`block ${isOpen ? "" : "max-md:hidden"} transition-all duration-300 ease-in-out px-4 py-2 hover:text-gray-600`}>Contact</a></li>
            </ul>
          </div>
        </nav>
      </header>
    </>
  )
}
