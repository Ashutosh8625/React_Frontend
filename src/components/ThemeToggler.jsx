import { createContext, useContext, useState } from "react";

/* ================= CONTEXT ================= */

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("dark");
  const [clicks, setClicks] = useState(0);

  const toggleTheme = () =>
    setTheme((prev) => (prev === "light" ? "dark" : "light"));

  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggleTheme,
        isDark: theme === "dark",
        clicks,
        setClicks,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("useTheme must be used inside ThemeProvider");
  return context;
}

/* ================= TOGGLE ================= */

function ThemeToggle() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <div className="flex items-center gap-3">
      <span className="text-sm font-medium">Dark Mode</span>
      <button
        onClick={toggleTheme}
        className={`relative w-14 h-7 rounded-full transition-all 
        ${isDark ? "bg-blue-600" : "bg-gray-400"}`}
      >
        <span
          className={`absolute top-1 w-5 h-5 bg-white rounded-full transition-all
          ${isDark ? "right-1" : "left-1"}`}
        />
      </button>
    </div>
  );
}

/* ================= CARD ================= */

function Card({ title, children }) {
  const { isDark } = useTheme();

  return (
    <div
      className={`p-6 rounded-xl shadow-lg transition-colors
      ${isDark ? "bg-slate-800 text-white" : "bg-white text-gray-800"}`}
    >
      <h3 className="text-lg font-semibold mb-4">{title}</h3>
      {children}
    </div>
  );
}

/* ================= BUTTON ================= */

function ActionButton({ children, variant = "primary", onClick }) {
  const { isDark } = useTheme();

  const styles = {
    primary: isDark
      ? "bg-blue-600 hover:bg-blue-700 text-white"
      : "bg-blue-500 hover:bg-blue-600 text-white",

    secondary: isDark
      ? "bg-gray-700 hover:bg-gray-600 text-white"
      : "bg-gray-200 hover:bg-gray-300 text-gray-800",
  };

  return (
    <button
      onClick={onClick}
      className={`px-5 py-2 rounded-lg transition-all font-medium ${styles[variant]}`}
    >
      {children}
    </button>
  );
}

/* ================= MAIN ================= */

function ThemeToggler() {
  const { isDark, clicks, setClicks, theme } = useTheme();

  return (
    <div
      className={`min-h-screen p-10 transition-colors
      ${isDark ? "bg-gradient-to-br from-slate-900 to-slate-800 text-white" : "bg-gray-100 text-gray-900"}`}
    >
      {/* Header */}
      <div className="flex justify-between items-center mb-10">
        <div>
          <h1 className="text-3xl font-bold mb-2">Theme Toggler</h1>
          <p className="text-gray-400 max-w-xl">
            This section demonstrates theme toggling using Context API and props.
            The theme state is shared across all child components without prop drilling.
          </p>
        </div>

        <ThemeToggle />
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <Card title="User Information">
          <p>Name: John Doe</p>
          <p>Email: john@example.com</p>
          <p>Role: Developer</p>

          <div className="flex gap-3 mt-4">
            <ActionButton>Edit Profile</ActionButton>
            <ActionButton variant="secondary">Settings</ActionButton>
          </div>
        </Card>

        <Card title="Statistics">
          <div className="flex justify-between mb-2">
            <span>Total Clicks:</span>
            <span className="text-blue-500 font-semibold">{clicks}</span>
          </div>

          <div className="flex justify-between mb-2">
            <span>Theme:</span>
            <span className="font-semibold capitalize">{theme}</span>
          </div>

          <div className="flex justify-between">
            <span>Status:</span>
            <span className="text-green-500 font-semibold">Active</span>
          </div>
        </Card>
      </div>

      {/* Interactive Section */}
      <Card title="Interactive Demo">
        <p className="mb-4 text-gray-400">
          Try clicking the buttons below to see how they adapt to the current theme:
        </p>

        <div className="flex flex-wrap gap-4">
          <ActionButton onClick={() => setClicks((c) => c + 1)}>
            Primary Action
          </ActionButton>

          <ActionButton
            variant="secondary"
            onClick={() => setClicks((c) => c + 1)}
          >
            Secondary Action
          </ActionButton>

          <ActionButton onClick={() => setClicks(0)}>
            Reset Counter
          </ActionButton>
        </div>
      </Card>
    </div>
  );
}

export default ThemeToggler;
