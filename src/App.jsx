import logo from "./assets/logo-text.png";
import banner from "./assets/banner-stack.png";
function App() {
  return (
    <>
      {/* Navbar */}
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

     {/* Hero Section */}
<section className="px-6 py-20 font-['Plus_Jakarta_Sans'] md:px-12 lg:px-20">

  <div className="mx-auto flex max-w-6xl items-center justify-between gap-10">

    {/* Hero Text */}
    <div className="max-w-2xl">

      {/* Heading */}
      <h1 className="text-4xl font-extrabold leading-tight text-[#0f172a] md:text-6xl">
        Build Your Ideal{" "}
        <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 bg-clip-text text-transparent">
          Development Stack
        </span>
      </h1>

      {/* Description */}
      <p className="mt-6 max-w-2xl text-base leading-relaxed text-[#475569] md:text-lg">
        Explore frontend, backend, database, and tooling options, compare
        them side by side, and put together the stack that fits your next
        project.
      </p>

      {/* Buttons */}
      <div className="mt-8 flex flex-wrap gap-4">

        <button className="rounded-md bg-gradient-to-r from-orange-400 to-pink-500 px-6 py-3 text-sm font-semibold text-white">
          Explore Technologies
        </button>

        <button className="rounded-md border border-gray-200 bg-white px-6 py-3 text-sm font-semibold text-[#334155]">
          Learn More
        </button>

      </div>

    </div>

    {/* Hero Image */}
    <div className="shrink-0">
      <img
        src={banner}
        alt="Development Stack"
        className="h-[350px] w-[350px] object-contain"
      />
    </div>

  </div>

</section>
    </>
  );
}

export default App;