import { useState ,useEffect} from "react"; // import state
import Image from 'next/image';
import { Link as ScrollLink } from "react-scroll";
import Link from "next/link";
// import SmoothScroll from 'smooth-scroll';
export default function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false); // initiate isNavOpen state with false
  return (
    <div className=" ms-4 me-4 flex items-center justify-between py-4">
      <Link href="/">
<h1> <Image
          src="/logo7.png"
          width={150}
          height={40} className=''
          alt="Picture of the author"
        /></h1>      </Link>
      <nav>
        <section className="MOBILE-MENU flex lg:hidden">
          <div
            className="HAMBURGER-ICON space-y-2"
            onClick={() => setIsNavOpen((prev) => !prev)} // toggle isNavOpen state on click
          >
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
          </div>

          <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}> 
            <div
              className="CROSS-ICON absolute top-0 right-0 px-8 py-8"
              onClick={() => setIsNavOpen(false)} // change isNavOpen state to false to close the menu
            >
              <svg
                className="h-8 w-8 text-gray-600"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </div>
            <ul className="MENU-LINK-MOBILE-OPEN flex flex-col items-center font-bold justify-between min-h-[250px]">
              <li className="my-8 uppercase ">
                <Link href="/about">Home</Link>
              </li>
              <li className="my-8 uppercase">
                <Link href="/portfolio">Cakes</Link>
              </li>
              <li className=" my-8 uppercase">
                <Link href="/contact">Gallery</Link>
              </li>  <li className=" my-8 uppercase">
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </div>
        </section>

        <ul className="DESKTOP-MENU hidden space-x-10 lg:flex">
          <li>
            <ScrollLink className="menuitem">Home</ScrollLink>
          </li>
          <li>
            <ScrollLink className="menuitem" smooth to="cakes">Cakes</ScrollLink>
          </li>
          <li>
            <ScrollLink className="menuitem" smooth to="gallery">Gallery</ScrollLink>
          </li>  <li>
          <ScrollLink className="menuitem"
              to="contact"smooth >Contact</ScrollLink>
          </li>
        </ul>
      </nav>
      <style>{`
      .hideMenuNav {
        display: none;
      }
      .showMenuNav {
        display: block;
        position: absolute;
        width: 100%;
        height: 100vh;
        top: 0;
        left: 0;
        background: white;
        z-index: 10;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
      }
    `}</style>
    
    </div>
  );
}