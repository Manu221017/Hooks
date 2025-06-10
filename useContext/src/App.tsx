import { ThemeProvider } from "./ThemeContext";
import ThemeToggle from "./ThemeToggle";
import ThemeDisplay from "./ThemeDisplay";

function App() {
  return (
    <ThemeProvider>
      <div className="main-container">
        <ThemeDisplay />
        <ThemeToggle />
      </div>
    </ThemeProvider>
  );
}

export default App;
