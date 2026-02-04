import {createContext, useState} from 'react'

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

function ThemeToggler() {
  return <div>ThemeToggler</div>
}

export default ThemeToggler