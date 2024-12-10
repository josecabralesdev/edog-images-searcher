import { useState } from "react"
import { Link } from "react-router-dom"
import logo from '../assets/icons8-dog-64.png'
import homeIcon from '../assets/icons/love.png'
import menu from '../assets/icons/menu-2.svg'
import close from '../assets/icons/bx-x.svg'
import breedListIcon from '../assets/icons/dog-nose.png'
import dedicationIcon from '../assets/icons/dog.png'

const Nav = () => {
  const [showMenu, setShowMenu] = useState(false)

  const toggleMenu = () => {
    setShowMenu(menu => !menu)
  }

  return (
    <nav className="relative w-full p-5 bg-myViolet flex justify-between items-center shadow border-b-2 border-b-white">
      <div className="flex flex-row-reverse gap-1 items-center">
        <Link className="text-white text-xl font-bold" to="/" >EDog Images Searcher</Link>
        <span>
          <img
            className="w-10"
            src={logo}
            alt="dog with heart"
          />
        </span>
      </div>

      <div className="hidden lg:flex text-white gap-4 font-semibold italic">
        <Link className="hover:underline hover:text-slate-200" to="/">Home</Link>
        <Link className="hover:underline hover:text-slate-200" to="/breedList">Breeds List</Link>
        <Link className="hover:underline hover:text-slate-200" to="/dedication">Dedication</Link>
      </div>

      <div className="lg:hidden">
        <img
          className="hover:cursor-pointer hover:scale-125 hover:opacity-80"
          src={menu}
          alt="menu icon"
          onClick={toggleMenu}
        />
      </div>

      {
        showMenu && <div className="absolute top-6 right-0 left-auto bottom-0 h-fit w-64 flex flex-col px-4 py-6 gap-10 bg-myWhite text-black font-semibold italicfont-semibold italic rounded shadow-md">
          <span className="-mb-8">
            <img
              className="size-8 justify-self-end hover:cursor-pointer hover:scale-125 hover:opacity-80"
              src={close}
              alt="close icon"
              onClick={toggleMenu}
            />
          </span>

          <Link className="hover:underline hover:text-slate-400 flex items-center gap-2" to="/" onClick={toggleMenu}><img className="size-6" src={homeIcon} />Home</Link>
          <Link className="hover:underline hover:text-slate-400 flex items-center gap-2" to="/breedList" onClick={toggleMenu}><img className="size-6" src={breedListIcon} />Breeds List</Link>
          <Link className="hover:underline hover:text-slate-400 flex items-center gap-2" to="/dedication" onClick={toggleMenu}><img className="size-6" src={dedicationIcon} />Dedication</Link>
        </div>
      }
    </nav>
  )
}

export default Nav