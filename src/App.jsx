import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import logo from "./assets/logo-text.png";
import banner from "./assets/banner-stack.png";

function App() {
  const [selectedTechnologies, setSelectedTechnologies] = useState([]);
  const [technologies, setTechnologies] = useState([]);
  const [loading, setLoading] = useState(true);
useEffect(() => {
  fetch("/technologies.json")
    .then((response) => response.json())
    .then((data) => {
      setTechnologies(data);
      setLoading(false);
    });
}, []);

  // Check if a tech is already selected to prevent duplicates & show alert
  const handleSelectTechnology = (technology) => {
  if (!selectedTechnologies.find((t) => t.id === technology.id)) {
    setSelectedTechnologies([...selectedTechnologies, technology]);

    toast.success(`${technology.name} added to your stack!`);
  } else {
  toast.warning(`"${technology.name}" is already in your stack!`);
}
};

  // Remove a single technology
  const handleRemoveTechnology = (techId) => {
  const removedTechnology = selectedTechnologies.find(
    (technology) => technology.id === techId
  );

  setSelectedTechnologies(
    selectedTechnologies.filter((technology) => technology.id !== techId)
  );

  toast.info(`${removedTechnology.name} removed from your stack!`);
};

  // Remove all selected technologies
  const handleRemoveAll = () => {
  setSelectedTechnologies([]);

  toast.info("All technologies removed from your stack!");
};

  // Helper function for dynamic badge colors
  const getBadgeStyles = (badge) => {
    switch (badge) {
      case "Popular":
      case "Modern":
      case "SSR / Edge":
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
     <ToastContainer />
      {/* Navbar */}
      <nav className="sticky top-0 z-50 border-b border-gray-200 bg-white">
        <div className="mx-auto hidden max-w-7xl items-center justify-between px-6 py-3 md:flex lg:px-20">
          <img src={logo} alt="Dev Stack" className="h-8 w-auto" />
          <ul className="flex items-center gap-6 font-['Plus_Jakarta_Sans'] text-sm font-medium text-[#334155]">
            <li className="cursor-pointer text-pink-500">Home</li>
            <li className="cursor-pointer">Technologies</li>
            <li className="cursor-pointer">Projects</li>
            <li className="cursor-pointer">About</li>
            <li className="cursor-pointer">Contact</li>
          </ul>
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
          <button className="text-2xl text-[#334155]">☰</button>
          <img src={logo} alt="Dev Stack" className="h-7 w-auto" />
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
        <div className="mx-auto flex flex-col md:flex-row max-w-7xl items-center justify-between gap-10">
          <div className="flex flex-col items-center md:items-start max-w-2xl">
            <h1 className="text-4xl font-extrabold leading-tight text-[#0f172a] md:text-6xl">
              Build Your Ideal <br className="md:hidden" />
              <span className="brand-gradient-text">
               Development Stack
              </span>
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-[#475569] md:text-lg">
              Explore frontend, backend, database, and tooling options, compare
              them side by side, and put together the stack that fits your next
              project.
            </p>
            <div className="mt-8 flex flex-wrap justify-center md:justify-start gap-4">
              <button className="brand-gradient rounded-md px-6 py-3 text-sm font-semibold text-white">
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
      <section className="px-6 py-12 md:px-12 lg:px-20 max-w-[1440px] mx-auto font-['Inter']">
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          
          {/* LEFT: Grid for Cards (1 col mobile, 2 col tablet, 3 col desktop) */}
          <div className="flex-1 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {loading ? (
           <p className="col-span-full text-center text-gray-500">
           Loading technologies...
           </p>
           ) : (
               technologies.map((tech) => {
              // Check if this specific tech is already in the stack
              const isAdded = selectedTechnologies.some((t) => t.id === tech.id);

              return (
                <div 
                  key={tech.id} 
                  className="flex flex-col justify-between h-full bg-white border border-gray-200 p-6 rounded-2xl shadow-sm hover:shadow-[0_4px_20px_rgb(0,0,0,0.06)] transition-all duration-300"
                >
                  <div>
                    {/* Icon, Title (Mobile) & Badge Row */}
                    <div className="flex justify-between items-center md:items-start mb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 shrink-0 flex items-center justify-center bg-gray-50 rounded-full border border-gray-100">
                          <img src={tech.icon} alt={tech.name} className="w-7 h-7 object-contain" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 md:hidden">{tech.name}</h3>
                      </div>
                      <span className={`shrink-0 px-3 py-1 text-[11px] font-semibold rounded-full border ${getBadgeStyles(tech.badge)}`}>
                        {tech.badge}
                      </span>
                    </div>

                    <h3 className="hidden md:block text-xl font-bold text-gray-900 mb-2">{tech.name}</h3>
                    
                    <p className="text-sm text-gray-500 leading-relaxed mb-6 line-clamp-3">
                      {tech.description}
                    </p>
                  </div>

                  <div>
                    {/* Attributes Row */}
                    <div className="flex items-center justify-between text-xs font-medium text-gray-600 mb-5">
                      <span className="bg-gray-50 border border-gray-200 px-2.5 py-1 rounded-md">
                        {tech.category}
                      </span>
                      <span className="bg-gray-50 border border-gray-200 px-2.5 py-1 rounded-md">
                        {tech.difficulty}
                      </span>
                      <span className="flex items-center gap-1 text-amber-500 font-bold">
                        ★ {tech.rating}
                      </span>
                    </div>

                    {/* Dynamic Add Button (changes state if already added) */}
                    <button
                      onClick={() => handleSelectTechnology(tech)}
                      className={`w-full py-2.5 rounded-lg text-sm font-semibold transition-colors ${
                     isAdded
                       ? "bg-green-50 text-green-600 border border-green-200"
                       : "bg-[#0f172a] text-white hover:bg-gray-800"
                    }`}
                 >
                   {isAdded ? "✓ Added to Stack" : "Add to Stack"}
                </button>
                  </div>
                </div>
              );
                })
              )}
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
                      <div className="w-8 h-8 shrink-0 flex items-center justify-center bg-gray-50 rounded-full border border-gray-100">
                        <img src={tech.icon} alt={tech.name} className="w-5 h-5 object-contain" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-gray-900">{tech.name}</h4>
                        <p className="text-[11px] text-gray-500">{tech.category}</p>
                      </div>
                    </div>
                    {/* Single Item Remove Button */}
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

      {/* ================= FOOTER SECTION ================= */}
      <footer className="border-t border-gray-200 bg-white pt-12 pb-6 font-['Plus_Jakarta_Sans']">
        <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-20">
          
          {/* Top part of footer: Brand & Links */}
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-5 lg:gap-8 mb-8 md:mb-16">
            
            {/* Brand Block (Centered on Mobile, Left on Desktop) */}
            <div className="flex flex-col items-center text-center lg:col-span-2 lg:items-start lg:text-left">
              <img src={logo} alt="Dev Stack" className="h-7 w-auto mb-4" />
              <p className="text-[#64748b] text-[13px] leading-relaxed mb-6 max-w-[280px] lg:max-w-xs">
                Curated tools, technologies, and resources for developers building modern software.
              </p>
              
              {/* Social Links */}
              <div className="flex items-center gap-3 text-[13px] font-medium text-[#64748b]">
                <a href="#" className="hover:text-pink-500 transition-colors">GitHub</a>
                <span className="text-gray-300">•</span>
                <a href="#" className="hover:text-pink-500 transition-colors">Twitter</a>
                <span className="text-gray-300">•</span>
                <a href="#" className="hover:text-pink-500 transition-colors">LinkedIn</a>
              </div>
            </div>

            {/* Links Group 1: Product (Hidden on mobile) */}
            <div className="hidden md:block">
              <h4 className="font-bold text-gray-900 mb-4">Product</h4>
              <ul className="space-y-3 text-sm text-gray-500 font-medium">
                <li><a href="#" className="hover:text-pink-500 transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-pink-500 transition-colors">Integrations</a></li>
                <li><a href="#" className="hover:text-pink-500 transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-pink-500 transition-colors">Changelog</a></li>
              </ul>
            </div>

            {/* Links Group 2: Company (Hidden on mobile) */}
            <div className="hidden md:block">
              <h4 className="font-bold text-gray-900 mb-4">Company</h4>
              <ul className="space-y-3 text-sm text-gray-500 font-medium">
                <li><a href="#" className="hover:text-pink-500 transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-pink-500 transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-pink-500 transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-pink-500 transition-colors">Contact</a></li>
              </ul>
            </div>

            {/* Links Group 3: Legal (Hidden on mobile) */}
            <div className="hidden md:block">
              <h4 className="font-bold text-gray-900 mb-4">Legal</h4>
              <ul className="space-y-3 text-sm text-gray-500 font-medium">
                <li><a href="#" className="hover:text-pink-500 transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-pink-500 transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-pink-500 transition-colors">Cookie Policy</a></li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar: Row on all devices */}
          <div className="flex flex-row items-center justify-between border-t border-gray-100 pt-6 text-[11px] md:text-sm">
            <p className="text-[#94a3b8] font-medium">
              © {new Date().getFullYear()} Dev Stack. All rights reserved.
            </p>
            <div className="flex items-center gap-4 text-[#94a3b8] font-medium">
              <a href="#" className="hover:text-gray-900 transition-colors">Privacy</a>
              <a href="#" className="hover:text-gray-900 transition-colors">Terms</a>
            </div>
          </div>
        </div>
      </footer>
      </>
  );
}

export default App;