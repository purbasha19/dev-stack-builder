import logo from "./assets/logo-text.png";
import banner from "./assets/banner-stack.png";
import technologiesData from './technologies.json';
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
      <section className="px-6 py-12 md:py-20 font-['Plus_Jakarta_Sans'] md:px-12 lg:px-20 text-center md:text-left">
        
        {/* Container - flex-col for mobile, md:flex-row for desktop */}
        <div className="mx-auto flex flex-col md:flex-row max-w-6xl items-center justify-between gap-10 md:gap-10">
          
          {/* Hero Text */}
          <div className="flex flex-col items-center md:items-start max-w-2xl">
            
            {/* Heading */}
            <h1 className="text-4xl font-extrabold leading-tight text-[#0f172a] md:text-6xl">
              Build Your Ideal{" "}
              <br className="md:hidden" /> {/* মোবাইলে লাইন ভাঙার জন্য */}
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

            {/* Buttons - justify-center on mobile, md:justify-start on desktop */}
            <div className="mt-8 flex flex-wrap justify-center md:justify-start gap-4">
              <button className="rounded-md bg-gradient-to-r from-orange-400 to-pink-500 px-6 py-3 text-sm font-semibold text-white">
                Explore Technologies
              </button>

              <button className="rounded-md border border-gray-200 bg-white px-6 py-3 text-sm font-semibold text-[#334155]">
                Learn More
              </button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="shrink-0 mt-8 md:mt-0">
            <img
              src={banner}
              alt="Development Stack"
              className="h-[300px] w-[300px] md:h-[350px] md:w-[350px] object-contain"
            />
          </div>

        </div>
      </section>
      {/* ================= TECHNOLOGY LIST SECTION ================= */}
        <section className="px-6 py-12 md:px-12 lg:px-20 max-w-7xl mx-auto font-['Inter']">
          
          {/* Heading Section */}
          <div className="mb-8">
            <h2 className="text-[36px] font-extrabold leading-[1.11] tracking-[-0.9px] text-[#0f172a]">
              Explore the{" "}
              <span className="bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-transparent">
                Technologies
              </span>
            </h2>
            <p className="mt-2 text-base text-[#475569]">
              Pick one technology per category to build your ideal stack.
            </p>
          </div>

          {/* Grid for Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {technologiesData.map((tech) => (
              <div key={tech.id} className="border border-gray-200 p-4 rounded-xl shadow-sm">
                <h3 className="text-xl font-bold">{tech.name}</h3>
                <p className="text-sm text-gray-500">{tech.category}</p>
              </div>
            ))}
          </div>
        </section>
    </>
  );
}

export default App;