import logo from "./assets/logo-text.png";

function App() {
  return (
    <nav className="sticky top-0 z-50 border-b border-gray-200 bg-white">
      
      {/* Desktop Navbar */}
      <div className="mx-auto hidden max-w-6xl items-center justify-between px-6 py-3 md:flex">

        {/* Logo */}
        <img
          src={logo}
          alt="Dev Stack"
          className="h-8 w-auto"
        />

        {/* Navigation */}
        <ul className="flex items-center gap-6 font-['Plus_Jakarta_Sans'] text-sm font-medium text-[#334155]">
          <li className="cursor-pointer text-pink-500">
            Home
          </li>

          <li className="cursor-pointer">
            Technologies
          </li>

          <li className="cursor-pointer">
            Projects
          </li>

          <li className="cursor-pointer">
            About
          </li>

          <li className="cursor-pointer">
            Contact
          </li>
        </ul>

        {/* Buttons */}
        <div className="flex items-center gap-5 font-['Plus_Jakarta_Sans']">
          <button className="text-sm font-medium text-[#334155] transition-colors hover:text-slate-900">
            Sign In
          </button>

          <button className="rounded-full bg-pink-500 px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-pink-600">
            Sign Up
          </button>
        </div>

      </div>


      {/* Mobile Navbar */}
      <div className="flex items-center justify-between px-4 py-3 md:hidden">

        {/* Hamburger */}
        <button className="text-2xl text-[#334155]">
          ☰
        </button>

        {/* Center Logo */}
        <img
          src={logo}
          alt="Dev Stack"
          className="h-7 w-auto"
        />

        {/* Mobile Buttons */}
        <div className="flex items-center gap-2">
          <button className="text-xs font-medium text-[#334155]">
            Sign In
          </button>

          <button className="rounded-full bg-pink-500 px-3 py-1.5 text-xs font-semibold text-white">
            Sign Up
          </button>
        </div>

      </div>

    </nav>
  );
}

export default App;