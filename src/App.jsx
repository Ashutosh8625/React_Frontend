import "./App.css";
import BasicProps from "./components/BasicProps.jsx";
import RefProps from "./components/RefProps.jsx";
import ComplexProps from "./components/ComplexProps.jsx";
import ChildrenProps from "./components/ChildrenProps.jsx";
import ThemeToggler, { ThemeProvider, useTheme } from "./components/ThemeToggler.jsx";

/* ================= NAVIGATION ================= */

function Navigation() {
  const { isDark } = useTheme();

  const sections = [
    { id: "basic", label: "Basic Props", icon: "📦" },
    { id: "ref", label: "Ref Props", icon: "🔗" },
    { id: "children", label: "Children Props", icon: "👶" },
    { id: "complex", label: "Complex Props", icon: "🧩" },
    { id: "theme", label: "Theme Props", icon: "🎨" },
  ];

  return (
    <nav
      className={`sticky top-0 z-50 shadow-md transition-colors ${
        isDark ? "bg-gray-900" : "bg-white"
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-wrap gap-2 justify-center">
          {sections.map((section) => (
            <a
              href={`#${section.id}`}
              key={section.id}
              className="px-4 py-3 rounded-lg font-medium text-white bg-gradient-to-r 
              from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700
              transition-all duration-300 shadow-md hover:shadow-xl"
            >
              <span className="mr-2">{section.icon}</span>
              {section.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}

/* ================= APP CONTENT ================= */

function AppContent() {
  const { isDark } = useTheme();

  return (
    <div
      className={`min-h-screen transition-colors ${
        isDark
          ? "bg-gradient-to-br from-slate-900 to-slate-800 text-white"
          : "bg-gradient-to-br from-blue-50 to-purple-50 text-gray-900"
      }`}
    >
      <Navigation />

      <div className="container mx-auto px-4 py-20">

        {/* HEADER */}

        <header className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent drop-shadow-lg">
            React Frontend
          </h1>

          <p
            className={`text-xl md:text-2xl max-w-2xl mx-auto leading-relaxed ${
              isDark ? "text-gray-300" : "text-gray-600"
            }`}
          >
            A React frontend for practice.
          </p>

          <div className="mt-8 flex justify-center">
            <span className="w-24 h-1 rounded-full bg-blue-500"></span>
          </div>
        </header>

        {/* SECTIONS */}

        <div className="space-y-12">

          <section id="basic" className="scroll-mt-32">
            <BasicProps />
          </section>

          <section id="children" className="scroll-mt-32">
            <ChildrenProps />
          </section>

          <section id="complex" className="scroll-mt-32">
            <ComplexProps />
          </section>

          <section id="ref" className="scroll-mt-32">
            <RefProps />
          </section>

          <section id="theme" className="scroll-mt-32">
            <ThemeToggler />
          </section>

        </div>
      </div>

      {/* FOOTER */}

      <footer
        className={`mt-32 border-t backdrop-blur-md ${
          isDark
            ? "border-gray-700 bg-gray-900/80"
            : "border-gray-200 bg-white/70"
        }`}
      >
        <div className="container mx-auto px-4 py-10 flex flex-col md:flex-row justify-between items-center gap-6">

          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} React Guide. All rights reserved.
          </p>

          <div className="flex gap-6 text-gray-400 text-sm">
            <a href="#" className="hover:text-white transition">Docs</a>
            <a href="#" className="hover:text-white transition">Tutorials</a>
            <a href="#" className="hover:text-white transition">About</a>
            <a href="#" className="hover:text-white transition">Contact</a>
          </div>

          <div className="flex gap-4 text-gray-400">
            <a href="#" className="hover:text-white transition">GitHub</a>
            <a href="#" className="hover:text-white transition">Twitter</a>
            <a href="#" className="hover:text-white transition">LinkedIn</a>
          </div>

        </div>
      </footer>
    </div>
  );
}

/* ================= ROOT ================= */

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;
