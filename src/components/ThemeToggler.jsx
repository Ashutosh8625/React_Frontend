import {createContext, useContext,useState} from 'react'

const ThemeContext = createContext();

export function ThemeProvider({ children }){
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'))
  }
  const value = {
    theme,
    toggleTheme,
    isDark: theme === 'dark'
  }
  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

export function useTheme(){
  const context = useContext(ThemeContext)

  if(!context) {
    throw new Error("useTheme must be used within ThemeProvider")
  }

  return context
}

function ThemeTogglerButton(){
  const {theme, toggleTheme, isDark} = useTheme()
  return(
    <button
    onClick={toggleTheme}
    className={`relatve w-16 h-7 rounded-full transition-colors duration-300 ${isDark ? "bg-blue-600":"bg-gray-300"}`}
    >{isDark ? '🌙' : '☀️'}</button>
  )
}

function ThemedCard({title, children}){
  const {isDark} = useTheme()
  return(
    <div
    className={`${isDark ? "bg-dark-600 text-white":"bg-white text-gray-800"}`}
    >
      <h3>{title}</h3>
      <div>{children}</div>
    </div>
  )
}

function ThemeToggler() {
  return <div>ThemeToggler</div>
}

export default ThemeToggler