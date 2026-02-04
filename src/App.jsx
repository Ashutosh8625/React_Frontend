import "./App.css";
import BasicProps from "./components/BasicProps.jsx";
import RefProps from "./components/RefProps.jsx";
import ComplexProps from "./components/ComplexProps.jsx";
import ChildrenProps from "./components/ChildrenProps.jsx";
import ThemeToggler,{ ThemeProvider } from "./components/ThemeToggler.jsx";

function Navigation() {
  const isDark = true;

  const sections = [
    { id: "basic", label: "Basic Props", icon: "📦" },
    { id: "ref", label: "Ref Props", icon: "🔗" },
    { id: "children", label: "Children Props", icon: "👶" },
    { id: "complex", label: "Complex Props", icon: "🧩" },
    { id: "theme", label: "Theme Props", icon: "🎨" },
  ];

  return (
    <nav
      className={`sticky top-0 z-50 shadow-md transition-colors${
        isDark ? "bg-gray-800" : "bg-white"
      }`}
    >
      <div className="container mx-auto ps-4 py-4">
        <div className="flex flex-wrap gap-2 justify-center">
          {sections.map((section) => (
            <button
              className={`px-4 py-3 rounded-lg font-medium text-white mr-2 mt-2 bg-linear-to-r from-blue-500 to-indigo-600
             hover:from-blue-600 hover:to-indigo-700
             transition-all duration-300
             shadow-md hover:shadow-xl`}
              key={section.id}
            >
              <span className={`mr-2`}>{section.icon}</span>
              {section.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}

function AppContent() {
  return (
    <div className="min-h-screen bg-linear-to-br from-gray-900 via-gray-800 to-gray-900">
      <Navigation />

      <div className="container mx-auto px-4 py-20">
        <header className="text-center mb-12">
          <h1
            className="text-5xl md:text-6xl font-extrabold mb-6 bg-linear-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent drop-shadow-lg"
          >
            React Frontend
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            A react frontend for practice.
          </p>
          <div className="mt-8 flex justify-center">
            <span className="w-24 h-1 rounded-full bg-blue-500"></span>
          </div>
        </header>
        <div className="space-y-7">
          <div id="basic" className="scroll-mt-200">
            <BasicProps />
          </div>
        </div>
      </div>
      <div className="space-y-7">
        <div id="basic" className="scroll-mt-200">
          <ChildrenProps />
        </div>
      </div>
      <div className="space-y-7">
        <div id="basic" className="scroll-mt-200">
          <ComplexProps />
        </div>
        <div className="space-y-7">
          <div id="basic" className="scroll-mt-200">
            <RefProps />
          </div>
        </div>
        <div className="space-y-7">
          <div id="basic" className="scroll-mt-200">
            <ThemeToggler />
          </div>
        </div>
        <footer className="mt-32 border-t border-gray-700 bg-gray-900/80 backdrop-blur-md">
          <div
            className="container mx-auto px-4 py-10 flex flex-col md:flex-row 
                  justify-between items-center gap-6"
          >
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} React Guide. All rights reserved.
            </p>
            <div className="flex gap-6 text-gray-400 text-sm">
              <a href="#" className="hover:text-white transition">
                Docs
              </a>
              <a href="#" className="hover:text-white transition">
                Tutorials
              </a>
              <a href="#" className="hover:text-white transition">
                About
              </a>
              <a href="#" className="hover:text-white transition">
                Contact
              </a>
            </div>
            <div className="flex gap-4 text-gray-400">
              <a href="#" className="hover:text-white transition">
                GitHub
              </a>
              <a href="#" className="hover:text-white transition">
                Twitter
              </a>
              <a href="#" className="hover:text-white transition">
                LinkedIn
              </a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;
