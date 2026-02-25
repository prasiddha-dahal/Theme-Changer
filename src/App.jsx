import { ThemeProvider } from "../ThemeContext.jsx"
import Home from "./components/Home"
import Navbar from "./components/Navbar"

function App() {

  return (
    <ThemeProvider >
      <Navbar />
      <Home />
    </ThemeProvider>
  )
}

export default App
