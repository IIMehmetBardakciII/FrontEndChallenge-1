import Image from "next/image"
import Link from "next/link"
import logo from '../public/images/logo.svg'

const Navbar = () => {
  return (
    <div className="max-container mt-[100px] mb-[15px]
    flex justify-between">
        
        <div>
            <Image src={logo} alt="logo" />
        </div>
        <div className="flex gap-5">
            <Link className="text-darkGrayishBlue hover:text-red duration-300 ease-in-out"  href='/' >Home</Link>
            <Link className="text-darkGrayishBlue hover:text-red duration-300 ease-in-out"  href='/' >New</Link>
            <Link className="text-darkGrayishBlue hover:text-red duration-300 ease-in-out"  href='/' >Popular</Link>
            <Link className="text-darkGrayishBlue hover:text-red duration-300 ease-in-out"  href='/' >Trending</Link>
            <Link className="text-darkGrayishBlue hover:text-red duration-300 ease-in-out"   href='/' >Categories</Link>
        </div>
    </div>
  )
}

export default Navbar