import Link from 'next/link'
// import MobileMenu from './mobile-menu'
import Image from "next/image";

import HomeLogo from '@/public/images/logo.png';

export default function Header() {
  return (
    <header className="absolute w-full z-30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-20">
          {/* Site branding */}
          <div className="shrink-0 mr-4">
            {/* Logo */}
            <Link href="https://booleancube.github.io/portfolio/" className="block" aria-label="BooleanCube">
              <Image src={HomeLogo} alt="Home" width={225} height={225} />
            </Link>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex md:grow">
            {/* Desktop sign in links */}
            <ul className="flex grow justify-end flex-wrap items-center">
              {/*<li>*/}
              {/*  <Link*/}
              {/*    href="/signin"*/}
              {/*    className="font-medium text-purple-600 hover:text-gray-200 px-4 py-3 flex items-center transition duration-150 ease-in-out"*/}
              {/*  >*/}
              {/*    Projects*/}
              {/*  </Link>*/}
              {/*</li>*/}
              {/*<li>*/}
              {/*  <Link href="https://booleancube.github.io/" target="_blank" className="btn-sm text-white bg-purple-600 hover:bg-purple-700 ml-3">*/}
              {/*    Personal Website*/}
              {/*  </Link>*/}
              {/*</li>*/}
            </ul>
          </nav>

          {/*<MobileMenu />*/}

        </div>
      </div>
    </header>
  )
}
