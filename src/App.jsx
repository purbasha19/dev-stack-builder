import { useState } from "react";
import logo from "./assets/logo-text.png";
import banner from "./assets/banner-stack.png";
import technologiesData from "./technologies.json";

function App() {
  const [selectedTechnologies, setSelectedTechnologies] = useState([]);

  // Check if a tech is already selected to prevent duplicates
  const handleSelectTechnology = (technology) => {
    if (!selectedTechnologies.find((t) => t.id === technology.id)) {
      setSelectedTechnologies([...selectedTechnologies, technology]);
    }
  };

  // Remove a single technology
  const handleRemoveTechnology = (techId) => {
    setSelectedTechnologies(selectedTechnologies.filter((t) => t.id !== techId));
  };

  // Remove all selected technologies
  const handleRemoveAll = () => {
    setSelectedTechnologies([]);
  };

  // Helper function for dynamic badge colors
  const getBadgeStyles = (badge) => {
    switch (badge) {
      case "Popular":
      case "Modern":
        return "text-cyan-500 bg-cyan-50 border-cyan-100";
      case "Versatile":
      case "Standard":
        return "text-emerald-500 bg-emerald-50 border-emerald-100";
      case "Fast":
        return "text-orange-500 bg-orange-50 border-orange-100";
      case "Ubiquitous":
        return "text-amber-500 bg-amber-50 border-amber-100";
      case "Top SQL":
      case "Essential":
      case "Robust":
      case "Containers":
        return "text-blue-500 bg-blue-50 border-blue-100";
      case "Cache":
        return "text-red-500 bg-red-50 border-red-100";
      default:
        return "text-gray-500 bg-gray-50 border-gray-100";
    }
  };

  return (
    <>
      {/* Navbar */}
      <nav className="sticky top-0 z-50 border-b border-gray-200 bg-white">
        {/* Desktop Navbar */}
        <div className="mx-auto hidden max-w-6xl items-center justify-between px-6 py-3 md:flex">
          {/* Logo */}
          <img src={logo} alt="Dev Stack" className="h-8 w-auto" />

          {/* Navigation */}
          <ul className="flex items-center gap-6 font-['Plus_Jakarta_Sans'] text-sm font-medium text-[#334155]">
            <li className="cursor-pointer text-pink-500">Home</li>
            <li className="cursor-pointer">Technologies</li>
            <li className="cursor-pointer">Projects</li>
            <li className="cursor-pointer">About</li>
            <li className="cursor-pointer">Contact</li>
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
          <button className="text-2xl text-[#334155]">☰</button>
          {/* Center Logo */}
          <img src={logo} alt="Dev Stack" className="h-7 w-auto" />
          {/* Mobile Buttons */}
          <div className="flex items-center gap-2">
            <button className="text-xs font-medium text-[#334155]">Sign In</button>
            <button className="rounded-full bg-pink-500 px-3 py-1.5 text-xs font-semibold text-white">
              Sign Up
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="px-6 py-12 md:py-20 font-['Plus_Jakarta_Sans'] md:px-12 lg:px-20 text-center md:text-left">
        <div className="mx-auto flex flex-col md:flex-row max-w-6xl items-center justify-between gap-10 md:gap-10">
          <div className="flex flex-col items-center md:items-start max-w-2xl">
            <h1 className="text-4xl font-extrabold leading-tight text-[#0f172a] md:text-6xl">
              Build Your Ideal <br className="md:hidden" />
              <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 bg-clip-text text-transparent">
                Development Stack
              </span>
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-[#475569] md:text-lg">
              Explore frontend, backend, database, and tooling options, compare
              them side by side, and put together the stack that fits your next
              project.
            </p>
            <div className="mt-8 flex flex-wrap justify-center md:justify-start gap-4">
              <button className="rounded-md bg-gradient-to-r from-orange-400 to-pink-500 px-6 py-3 text-sm font-semibold text-white">
                Explore Technologies
              </button>
              <button className="rounded-md border border-gray-200 bg-white px-6 py-3 text-sm font-semibold text-[#334155]">
                Learn More
              </button>
            </div>
          </div>
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
      <section className="px-6 py-12 md:px-12 lg:px-20 max-w-[1400px] mx-auto font-['Inter']">
        {/* Layout: Main Grid (Left) + Sidebar (Right) */}
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          
          {/* LEFT: Grid for Cards */}
          <div className="flex-1 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {technologiesData.map((tech) => (
              <div 
                key={tech.id} 
                className="flex flex-col justify-between h-full bg-white border border-gray-200 p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow"
              >
                <div>
                  {/* Icon & Badge Row */}
                  <div className="flex justify-between items-start mb-5">
                    <div className="w-12 h-12 flex items-center justify-center bg-gray-50 rounded-full border border-gray-100">
                      <img src={tech.icon} alt={tech.name} className="w-7 h-7 object-contain" />
                    </div>
                    {/* Dynamic Badge */}
                    <span className={`px-3 py-1 text-[11px] font-semibold rounded-full border ${getBadgeStyles(tech.badge)}`}>
                      {tech.badge}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{tech.name}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed mb-6 line-clamp-3">
                    {tech.description}
                  </p>
                </div>

                <div>
                  {/* Attributes Row */}
                  <div className="flex items-center gap-2 text-xs font-medium text-gray-600 mb-5">
                    <span className="bg-gray-50 border border-gray-200 px-2.5 py-1 rounded-md">
                      {tech.category}
                    </span>
                    <span className="bg-gray-50 border border-gray-200 px-2.5 py-1 rounded-md">
                      {tech.difficulty}
                    </span>
                    <span className="ml-auto flex items-center gap-1 text-amber-500 font-bold">
                      ★ {tech.rating}
                    </span>
                  </div>

                  {/* Add Button */}
                  <button 
                    onClick={() => handleSelectTechnology(tech)}
                    className="w-full bg-[#0f172a] hover:bg-gray-800 text-white py-2.5 rounded-lg text-sm font-semibold transition-colors"
                  >
                    Add to Stack
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* RIGHT: Sticky Sidebar "Your Stack" */}
          <div className="w-full lg:w-[320px] shrink-0 sticky top-24 bg-white border border-gray-200 rounded-2xl shadow-sm p-6">
            <h3 className="text-xl font-bold text-gray-900">Your Stack</h3>
            
            <p className="text-sm text-gray-500 mt-1 mb-6">
              {selectedTechnologies.length === 0 
                ? "No technologies selected yet." 
                : `${selectedTechnologies.length} Technology Selected`}
            </p>

            {/* Empty State vs Selected State */}
            {selectedTechnologies.length === 0 ? (
              <div className="border-2 border-dashed border-gray-200 rounded-xl p-8 text-center bg-gray-50">
                <p className="text-sm text-gray-400 font-medium">Your stack is empty.</p>
              </div>
            ) : (
              <div className="space-y-3">
                {selectedTechnologies.map((tech) => (
                  <div key={tech.id} className="flex items-center justify-between p-3 bg-white border border-gray-200 rounded-xl">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 flex items-center justify-center bg-gray-50 rounded-full border border-gray-100">
                        <img src={tech.icon} alt={tech.name} className="w-5 h-5 object-contain" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-gray-900">{tech.name}</h4>
                        <p className="text-[11px] text-gray-500">{tech.category}</p>
                      </div>
                    </div>
                    <button 
                      onClick={() => handleRemoveTechnology(tech.id)}
                      className="text-gray-400 hover:text-red-500 text-lg transition-colors p-1"
                    >
                      ✕
                    </button>
                  </div>
                ))}

                {/* Remove All Button */}
                <button 
                  onClick={handleRemoveAll}
                  className="w-full mt-6 py-2 border border-red-200 text-red-500 rounded-lg text-sm font-semibold hover:bg-red-50 transition-colors"
                >
                  Remove All
                </button>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}

export default App;